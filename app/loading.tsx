export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl animate-pulse">
        <div className="h-6 w-44 rounded-full bg-white/10" />
        <div className="mt-8 h-16 max-w-2xl rounded-lg bg-white/10" />
        <div className="mt-4 h-6 max-w-xl rounded-lg bg-white/10" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="h-48 rounded-xl bg-white/10" />
          <div className="h-48 rounded-xl bg-white/10" />
          <div className="h-48 rounded-xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}
