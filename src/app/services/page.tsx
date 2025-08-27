import {
  ArrowPathIcon,
  CodeBracketSquareIcon,
  PuzzlePieceIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ArrowPathRoundedSquareIcon,
  EnvelopeIcon,
  VideoCameraIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import ContactButton from '../_components/contactButton';

const processes = [
  {
    name: '1. First Contact',
    description:
      "Let us know what your pain points are and we'll provide the estimates. We will respond within 48 hours.",
    icon: EnvelopeIcon,
  },
  {
    name: '2. Discovery Call',
    description:
      'A technical review to define the problem details and project scope.',
    icon: VideoCameraIcon,
  },
  {
    name: '3. Proposal',
    description:
      'We will provide you with a proposal that best solves the problem in a timely and cost effective manner.',
    icon: DocumentCheckIcon,
  },
  {
    name: '4. Contract',
    description:
      "We'll send you a clear contract with focused deliverables and timeline.",
    icon: DocumentTextIcon,
  },
  {
    name: '5. Rapid Interation',
    description:
      'We focus on getting a rough usable product in your hands as soon as possible. With your feedback we then improve the product. Repeat this process until you have a product you love.',
    icon: ArrowPathIcon,
  },
  {
    name: '6. Communication',
    description:
      'Rapid iteration requires that both parties provide quick and clear communication. The faster we have usable feedback, the faster we can improve the product.',
    icon: ChatBubbleLeftRightIcon,
  },
];

const services = [
  {
    name: 'Game Engine Tooling',
    href: '/services/plugins',
    description:
      'Our team will discuss with you what workflow you need and implement them directly into your game engine as a plugin.',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Web Systems',
    href: '/services/webdev',
    description:
      "Do you need a custom web application but don't know where to start? We can help guide you through the process, design, and implement your web application from beginning to end.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'AI Integration',
    href: '/services/ai',
    description:
      'Integrate AI to automate workflows in your software. Game Engines, Web Applications, Custom Tools, we are here to help you be more productive.',
    icon: CpuChipIcon,
  },
  {
    name: 'Automation',
    href: '/services/automation',
    description:
      'We can provide custom tooling to automate your workflows. We will work with you to understand your workflows and provide you with tools to save you time.',
    icon: ArrowPathRoundedSquareIcon,
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="mx-auto mb-2 px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-16 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-5 justify-self-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
            Services
          </h2>
          <p className="col-span-5 max-w-2xl justify-self-center text-center text-gray-900 dark:text-white">
            Our software engineers have 10+ years of experience for tech giants
            like Amazon, and small companies alike. Please get in touch as we
            are eager to help!
          </p>
          <div className="col-span-5 mx-auto mb-2">
            <ContactButton />
          </div>
          <dl className="col-span-5 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.name}>
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                    <service.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600 dark:text-gray-400">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-16 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-5 justify-self-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
            Process
          </h2>
          <dl className="col-span-5 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {processes.map((process) => (
              <div key={process.name}>
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                    <process.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {process.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600 dark:text-gray-400">
                  {process.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
