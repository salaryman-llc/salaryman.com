import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import nodemailer from 'nodemailer'
import { env } from "~/env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.CONTACT_EMAIL,
    pass: env.GOOGLE_APP_PASSWORD,
  },
});

export const contactRouter = createTRPCRouter({
  sendInquiry: publicProcedure
    .input(z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      company: z.string().optional(),
      message: z.string()
    }))
    .mutation(async ({ input }) => {
      const info = await transporter.sendMail({
        from: `"${input.firstName} ${input.lastName}" <${input.email}>`,
        to: env.CONTACT_EMAIL,
        subject: "Salaryman Website Inquiry",
        text: `Name: ${input.firstName} ${input.lastName}\nCompany: ${input.company}\nEmail: ${input.email}\n\n${input.message}`,
      });
    }),
});
