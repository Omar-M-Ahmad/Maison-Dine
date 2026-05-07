import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground">
      <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="mb-4 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
          404 · Page not found
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">This table is not available.</h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          The page you are looking for may have moved, or the reservation link is no longer valid.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-primary-foreground transition hover:opacity-90"
        >
          Back to homepage
        </Link>
      </section>
    </main>
  );
}
