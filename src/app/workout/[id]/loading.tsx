const Loading = () => {
  return (
    <main className="min-h-screen bg-black px-4 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="h-5 w-32 animate-pulse rounded bg-[#222630]" />

        <div className="mt-8 overflow-hidden rounded-3xl bg-[#15171d]">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="h-[350px] animate-pulse bg-[#222630] lg:h-[550px]" />

            <div className="space-y-5 p-8">
              <div className="h-6 w-32 animate-pulse rounded bg-[#222630]" />

              <div className="h-12 w-3/4 animate-pulse rounded bg-[#222630]" />

              <div className="h-20 w-full animate-pulse rounded bg-[#222630]" />

              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 animate-pulse rounded-xl bg-[#222630]" />
                <div className="h-20 animate-pulse rounded-xl bg-[#222630]" />
                <div className="h-20 animate-pulse rounded-xl bg-[#222630]" />
                <div className="h-20 animate-pulse rounded-xl bg-[#222630]" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default Loading;