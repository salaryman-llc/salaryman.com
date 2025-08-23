import {
  EnvelopeIcon,
  GlobeAsiaAustraliaIcon,
} from '@heroicons/react/24/outline';
import ContactForm from '../_components/contactForm';

export default function Contact() {
  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
              For general inquiries feel free to reach out by email or the
              contact form. We will respond to inqueries within 48 hours.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <GlobeAsiaAustraliaIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <p>Japan Based (JST)</p>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:contact@salaryman.com"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    contact@salaryman.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
