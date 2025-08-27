export default function BlogAuthor({
  name,
  title,
  imageSrc,
}: {
  name: string;
  title: string;
  imageSrc: string;
}) {
  return (
    <div className="mt-6 flex border-t border-gray-900/5 pt-6 dark:border-white/10">
      <div className="relative flex items-center gap-x-4">
        <img
          alt=""
          src="https://avatars.githubusercontent.com/u/4359026?s=100&v=4"
          className="size-20 rounded-full bg-gray-50 dark:bg-gray-800"
        />
        <div className="text-lg">
          <p className="font-semibold text-gray-900 dark:text-white">
            <span className="absolute inset-0" />
            Robert Kennedy
          </p>
          <p className="text-gray-600 dark:text-gray-400">Founder / CEO</p>
        </div>
      </div>
    </div>
  );
}
