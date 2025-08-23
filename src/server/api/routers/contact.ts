import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import nodemailer from 'nodemailer';
import { env } from '~/env';
import { verify } from 'hcaptcha';
import PostHogClient from '../../../app/posthog';

const posthog = PostHogClient();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.CONTACT_EMAIL,
    pass: env.GOOGLE_APP_PASSWORD,
  },
});

export const contactRouter = createTRPCRouter({
  sendInquiry: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        company: z.string().optional(),
        message: z.string(),
        token: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const data = await verify(
        env.HCAPTCHA_SECRET,
        input.token,
        undefined,
        env.NEXT_PUBLIC_HCAPTCHA_SITEKEY
      );
      if (data.success === true) {
        posthog.capture({
          distinctId: 'server',
          event: 'hcaptcha-verification',
          properties: {
            succeeded: true,
          },
        });
        const info = await transporter.sendMail({
          from: `"${input.firstName} ${input.lastName}" <${input.email}>`,
          to: env.CONTACT_EMAIL,
          subject: 'Salaryman Website Inquiry',
          text: `Name: ${input.firstName} ${input.lastName}\nCompany: ${input.company}\nEmail: ${input.email}\n\n${input.message}`,
        });

        posthog.capture({
          distinctId: 'server',
          event: 'contact-email',
          properties: {
            accepted: info.accepted,
            rejected: info.rejected,
            response: info.response,
            messageId: info.messageId,
            envelope: info.envelope,
          },
        });
      } else {
        posthog.capture({
          distinctId: 'server',
          event: 'hcaptcha-verification',
          properties: {
            succeeded: false,
          },
        });
      }
    }),
});
