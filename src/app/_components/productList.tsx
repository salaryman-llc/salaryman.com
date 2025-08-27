import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/20/solid';
import { allProducts } from '../products/productDetails';

export default function ProductList() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl dark:text-white">
            Salaryman Products
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            {'Crafted with love '} <HeartIcon className="inline size-5" />
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
          {allProducts.map((product) => (
            <article
              key={product.title}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">
                  {product.status}
                </p>
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">
                  {product.engines}
                </p>
              </div>

              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 dark:text-white">
                  {product.title}
                </h3>
                <p className="mt-5 text-sm/6 text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
              </div>

              {product.storeLinks && (
                <div className="relative mt-4 flex items-center gap-x-4">
                  <div className="text-sm/6 text-gray-900 dark:text-white">
                    <p className="font-semibold">Store Links</p>
                    {product.storeLinks?.map((link) => (
                      <div
                        key={link.name}
                        className="hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <Link href={link.href}>{link.name}</Link>
                        <ArrowRightIcon className="ml-1 inline size-3" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="relative mt-4 flex items-center gap-x-4">
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Platforms
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {product.platforms}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
