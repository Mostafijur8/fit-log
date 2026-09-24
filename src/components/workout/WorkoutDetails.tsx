
import Link from "next/link";
import WorkoutActions from "./WorkoutActions";
import type { IWorkout } from "@/types/workout";

interface WorkoutDetailsProps {
  workout: IWorkout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  return (
    <main className="min-h-screen bg-black px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/#library"
          className="mb-5 inline-flex text-xs font-medium text-[#9ca3af] transition-colors hover:text-[#c2f800] sm:text-sm"
        >
          ← Back to Workouts
        </Link>

        {/* Main Details Card */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#15171d] sm:rounded-3xl">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ================= LEFT : IMAGE ================= */}
            <div className="h-[300px] sm:h-[400px] lg:h-[750px]">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* ================= RIGHT : CONTENT ================= */}
            <div className="flex flex-col p-4 sm:p-6 lg:min-h-[750px] lg:p-8 xl:p-10">

              {/* Muscle Groups */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#c2f800]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#c2f800] sm:px-3 sm:text-[10px]"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Workout Name */}
              <h1 className="mt-4 text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl">
                {workout.name}
              </h1>

              {/* Description */}
              <p className="mt-3 text-xs leading-5 text-[#9ca3af] sm:mt-5 sm:text-sm sm:leading-6">
                {workout.description}
              </p>

              {/* ================= WORKOUT INFORMATION ================= */}
              <div className="mt-6 border-t border-white/10 pt-5 sm:mt-7 sm:pt-6">

                <div className="space-y-3">

                  {/* Equipment */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#6b7280] sm:text-[10px]">
                      Equipment
                    </p>

                    <p className="ml-4 text-right text-xs font-semibold text-white sm:text-sm">
                      {workout.equipment}
                    </p>
                  </div>

                  {/* Difficulty */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#6b7280] sm:text-[10px]">
                      Difficulty
                    </p>

                    <p className="ml-4 text-right text-xs font-semibold text-[#c2f800] sm:text-sm">
                      {workout.difficulty}
                    </p>
                  </div>

                  {/* Sets */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#6b7280] sm:text-[10px]">
                      Sets
                    </p>

                    <p className="text-right text-xs font-bold text-white sm:text-sm">
                      {workout.sets}
                    </p>
                  </div>

                  {/* Reps */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#6b7280] sm:text-[10px]">
                      Reps
                    </p>

                    <p className="text-right text-xs font-bold text-white sm:text-sm">
                      {workout.reps}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#6b7280] sm:text-[10px]">
                      Duration
                    </p>

                    <p className="text-right text-xs font-bold text-white sm:text-sm">
                      {workout.duration} min
                    </p>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#6b7280] sm:text-[10px]">
                      Calories
                    </p>

                    <p className="text-right text-xs font-bold text-white sm:text-sm">
                      {workout.caloriesBurned} kcal
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#6b7280] sm:text-[10px]">
                      Rating
                    </p>

                    <p className="text-right text-xs font-bold text-[#c2f800] sm:text-sm">
                      ★ {workout.rating}
                    </p>
                  </div>

                </div>
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-6 flex flex-1 flex-col border-t border-white/10 pt-5 sm:mt-7 sm:pt-6">

                <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#c2f800] sm:text-[10px]">
                  HOW TO PERFORM
                </p>

                <h2 className="mt-1 text-xl font-extrabold uppercase text-white sm:mt-2 sm:text-2xl">
                  Instructions
                </h2>

                <div className="mt-3 flex flex-1 flex-col justify-between gap-2 sm:mt-5 sm:gap-3">

                  {workout.instructions.map((instruction, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 rounded-lg border border-white/10 bg-black/20 p-2 sm:gap-3 sm:rounded-xl sm:p-3"
                    >

                      {/* Number */}
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c2f800] text-[9px] font-bold text-black sm:h-7 sm:w-7 sm:text-xs">
                        {index + 1}
                      </span>

                      {/* Instruction Text */}
                      <p className="text-[10px] leading-4 text-[#d1d5db] sm:text-xs sm:leading-5">
                        {instruction}
                       
                      </p>

                    </div>
                  ))}

                </div>
                 <WorkoutActions workout={workout} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;

