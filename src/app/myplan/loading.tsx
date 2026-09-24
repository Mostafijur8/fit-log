const Loading = () => {
  return (
    <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse">

        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-7 w-40 rounded-lg bg-white/10 sm:h-9 sm:w-52" />
          <div className="mt-3 h-3 w-64 rounded bg-white/5 sm:w-80" />
        </div>

        {/* Metrics Skeleton */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-[#15171d] p-3 sm:p-5"
            >
              <div className="h-2.5 w-14 rounded bg-white/10 sm:h-3 sm:w-20" />

              <div className="mt-3 h-6 w-10 rounded bg-white/10 sm:h-8 sm:w-14" />
            </div>
          ))}
        </div>

        {/* Tabs + Dropdown Skeleton */}
        <div className="mt-8 flex items-center justify-between gap-3">
          <div className="flex gap-1 rounded-xl border border-white/10 bg-[#15171d] p-1">
            <div className="h-8 w-24 rounded-lg bg-white/10 sm:w-32" />
            <div className="h-8 w-20 rounded-lg bg-white/5 sm:w-28" />
          </div>

          <div className="h-9 w-20 rounded-lg border border-white/10 bg-[#15171d] sm:w-28" />
        </div>

        {/* Workout Cards */}
        <div className="mt-8 space-y-5">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex overflow-hidden rounded-xl border border-white/10 bg-[#15171d] sm:rounded-2xl"
            >
              {/* Image */}
              <div className="h-[125px] w-20 shrink-0 bg-white/10 sm:h-[190px] sm:w-40 md:w-52 lg:w-64" />

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col justify-center p-2.5 sm:p-5">
                <div className="h-3 w-24 rounded bg-white/10 sm:h-5 sm:w-40" />

                <div className="mt-2 h-2 w-32 rounded bg-white/5 sm:w-52" />

                <div className="mt-4 flex gap-2">
                  <div className="h-10 w-16 rounded-lg bg-white/5 sm:w-24" />
                  <div className="h-10 w-16 rounded-lg bg-white/5 sm:w-24" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex w-[82px] shrink-0 flex-col justify-center gap-1.5 p-2 sm:w-36 sm:gap-2 sm:p-4">
                <div className="h-7 rounded-md bg-white/10 sm:h-10 sm:rounded-lg" />
                <div className="h-7 rounded-md bg-white/5 sm:h-10 sm:rounded-lg" />
                <div className="h-7 rounded-md bg-white/5 sm:h-10 sm:rounded-lg" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
};

export default Loading;