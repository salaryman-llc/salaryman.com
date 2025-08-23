"use client";

import { Description, ErrorMessage, Field, FieldGroup, Fieldset, Label } from '../_components/catalyst/fieldset'
import { Input } from '../_components/catalyst/input'
import { Textarea } from '../_components/catalyst/textarea'
import { Button } from '../_components/catalyst/button'
import { type FormEvent, useState } from 'react'
import { api } from '~/trpc/react';


export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [succeeded, setSuccess] = useState<boolean>(false)
  const sendInquiry = api.contact.sendInquiry.useMutation({
    onSuccess: async () => {
      setSuccess(true)
      setIsLoading(false)
    },
    onError: async (error) => {
      console.error(error)
      setError(error.message)
    }
  })

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)

    sendInquiry.mutate({
      firstName: formData.get('firstName')!.toString(),
      lastName: formData.get('lastName')!.toString(),
      email: formData.get('email')!.toString(),
      company: formData.get('company')?.toString(),
      message: formData.get('message')!.toString(),
    })
  }

  return (
    <form onSubmit={onSubmit} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
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
            <Input type='email' name="email" required />
          </Field>
          <Field>
            <Label>Company (Optional)</Label>
            <Input name="company" />
          </Field>
          <Field>
            <Label>Message</Label>
            <Textarea name="message" />
            <Description>Let us know how we can help!</Description>
          </Field>
          <Field>
            <Button type='submit' className='w-full hover:cursor-pointer' color='salaryman/blue' disabled={isLoading || succeeded}>
              {isLoading ? 'Sending...' : succeeded ? 'Sent!' : 'Send'}
            </Button>
          </Field>
        </FieldGroup>
      </Fieldset>
    </form>
  )
}