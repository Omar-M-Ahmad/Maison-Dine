export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-pulse rounded-full border border-border bg-secondary" />
        <p className="text-sm text-muted-foreground">Preparing your dining experience…</p>
      </div>
    </main>
  );
}
