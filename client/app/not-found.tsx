import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="grid min-h-full place-items-center bg-main px-6 py-32 sm:py-32 lg:px-8 lg:pt-52">
      <div className="text-center">
        <p className="text-base font-semibold text-accent">404</p>
        <h1 className="font-lastica mt-4 text-3xl font-light tracking-widest text-main sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-lg leading-7 text-accent">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="btn-main"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
