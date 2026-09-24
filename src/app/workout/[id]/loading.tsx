const Loading = () => {
  return (
    <main className="min-h-screen bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="h-8 w-48 animate-pulse rounded bg-[#222630]" />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="h-80 animate-pulse rounded-2xl bg-[#15171d]" />

          <div className="space-y-4">
            <div className="h-10 w-3/4 animate-pulse rounded bg-[#15171d]" />
            <div className="h-5 w-full animate-pulse rounded bg-[#15171d]" />
            <div className="h-5 w-5/6 animate-pulse rounded bg-[#15171d]" />
            <div className="h-20 w-full animate-pulse rounded bg-[#15171d]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;