const PlanHeader = () => {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#c2f800]">
        YOUR WORKOUTS
      </p>

      <h1 className="mt-2 text-3xl font-extrabold uppercase text-white sm:text-5xl">
        MY PLAN
      </h1>

      <p className="mt-3 text-sm text-[#9ca3af]">
        Cap of five lifts for today. Finish them, then load more.
      </p>
    </div>
  );
};

export default PlanHeader;