import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="grid min-h-full place-items-center bg-gray-900 px-6 py-32 sm:py-32 lg:px-8 lg:pt-52">
      <div className="text-center">
        <p className="text-base font-semibold text-violet-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-400">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-full bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link href="" className="text-sm font-semibold text-gray-300">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
