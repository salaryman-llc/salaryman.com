'use client';

import {
  Description,
  ErrorMessage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from '../_components/catalyst/fieldset';
import { Input } from '../_components/catalyst/input';
import { Textarea } from '../_components/catalyst/textarea';
import { Button } from '../_components/catalyst/button';
import { type FormEvent, useRef, useState } from 'react';
import { api } from '~/trpc/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { env } from '~/env';

type SubmitionData = {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [succeeded, setSuccess] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [submitionData, setSubmitionData] = useState<SubmitionData | undefined>(
    undefined
  );
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const sendInquiry = api.contact.sendInquiry.useMutation({
    onSuccess: async () => {
      setIsLoading(false);
      setSuccess(true);
      setDisableButton(false);
      formRef.current?.reset();
    },
    onError: async (error) => {
      setIsLoading(false);
      setError(error.message);
      setDisableButton(false);
    },
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDisableButton(true);
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    setSubmitionData({
      firstName: formData.get('firstName')!.valueOf() as string,
      lastName: formData.get('lastName')!.valueOf() as string,
      email: formData.get('email')!.valueOf() as string,
      company: formData.get('company')?.valueOf() as string,
      message: formData.get('message')!.valueOf() as string,
    });

    captchaRef.current?.execute();
  }

  function handleVerificationSuccess(token: string) {
    if (!submitionData) {
      return;
    }

    sendInquiry.mutate({
      firstName: submitionData.firstName,
      lastName: submitionData.lastName,
      email: submitionData.email,
      company: submitionData.company,
      message: submitionData.message,
      token: token,
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      ref={formRef}
      className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
    >
      <Fieldset>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>First name</Label>
              <Input name="firstName" required />
            </Field>
            <Field>
              <Label>Last name</Label>
              <Input name="lastName" required />
            </Field>
          </div>
          <Field>
            <Label>Email</Label>
            <Input type="email" name="email" required />
          </Field>
          <Field>
            <Label>Company (Optional)</Label>
            <Input name="company" />
          </Field>
          <Field>
            <Label>Message</Label>
            <Textarea name="message" required />
            <Description>Let us know how we can help!</Description>
          </Field>
          <HCaptcha
            size="invisible"
            ref={captchaRef}
            sitekey={env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
            onVerify={(token) => handleVerificationSuccess(token)}
          />
          <Field>
            <Button
              type="submit"
              className={
                'h-captcha w-full' +
                (!disableButton ? ' hover:cursor-pointer' : '')
              }
              color="salaryman/blue"
              disabled={disableButton}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
            <Description className="mt-2 text-center">
              {succeeded && "Inquiry sent! We'll get back to you shortly!"}
            </Description>
            <ErrorMessage className="mt-2 text-center">
              {error && `Error: ${error}`}
            </ErrorMessage>
          </Field>
        </FieldGroup>
      </Fieldset>
    </form>
  );
}
