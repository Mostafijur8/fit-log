import WorkoutGrid from "./WorkoutGrid";


const Library = () => {
  return (
    <section
      id="library"
      className="bg-black px-4 py-20"
    >
      <div className="container mx-auto">
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#c2f800]">
            WORKOUT LIBRARY
          </p>

          <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            PICK YOUR WORKOUT
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#9ca3af]">
            Choose a workout, train with purpose, and keep track of every set.
          </p>
        </div>

        <WorkoutGrid />
      </div>
    </section>
  );
};

export default Library;