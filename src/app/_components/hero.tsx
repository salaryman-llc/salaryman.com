import {
  CodeBracketSquareIcon,
  PuzzlePieceIcon,
  CommandLineIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./catalyst/button";
import { Link } from "./catalyst/link";

const features = [
  {
    name: "Games",
    description:
      "We make indie games that focus on our teams interests and passions. No genre or asthetic is off limits. Our goal is to create experiences that are approachable, thoughtful, and fun. Take a look at our projects and see what we're working on.",
    linkLabel: "Games",
    href: "/games",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Game Systems | Engine Plugins",
    description:
      "Alongside our games we build simple, reliable systems and plugins for game engines. We focus on tools that save time, smooth out workflows, and make development a little less stressful. Whether you're an indie dev or a small team, our plugins are designed to help you ship faster.",
    linkLabel: "Products",
    href: "/products",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Software Engineering",
    description:
      "We help bring ideas to life through custom software. We work with small teams and businesses to build tools that fit your exact needs. If you've got a problem that needs a creative solution, we'd love to help.",
    linkLabel: "Services",
    href: "/services",
    icon: CommandLineIcon,
  },
];

export default function Hero() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            {"Your Very Own Salaryman"}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            {
              "We are an indie game developer that provides software engineering expertise for indie game studios and businesses. "
            }
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button className="hover:cursor-pointer" color="salaryman/orange">
                <EnvelopeIcon />
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-400">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-3">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold text-blue-500 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200"
                    >
                      {feature.linkLabel} <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
