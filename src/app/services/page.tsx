import {
  ArrowPathIcon,
  CodeBracketSquareIcon,
  PuzzlePieceIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  CpuChipIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const processes = [
  {
    name: 'Rapid Interation',
    description:
      'A key principle in software engineering that we fully embrace. We focus on getting a rough usable product in your hands as soon as possible. With your feedback we improve the product. Then repeat this process until you have a product you love.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Communication',
    description:
      'The process of rapid iteration requires that both parties provide quick and clear communication. The faster we have usable feedback from you the faster we can improve the product and thus complete the work.',
    icon: ChatBubbleLeftRightIcon,
  },
];

const features = [
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
          <h2 className="col-span-5 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Services
          </h2>
          <dl className="col-span-5 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.href && (
                    <Link href={feature.href} className="hover:text-gray-200">
                      <span>{feature.name}</span>{' '}
                      <ArrowRightIcon className="inline size-3" />
                    </Link>
                  )}
                  {!feature.href && feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-16 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-5 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
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
