import Link from "next/link";
import type { IWorkout } from "@/types/workout";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#15171d] transition duration-300 hover:-translate-y-1 hover:border-[#c2f800]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#c2f800]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c2f800]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Equipment */}
        <p className="mt-3 text-xs text-[#9ca3af]">
          Equipment:{" "}
          <span className="text-white">
            {workout.equipment}
          </span>
        </p>

        {/* Workout Name */}
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#c2f800]">
          {workout.name}
        </h3>

        {/* Workout Info */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-[#9ca3af]">
          {/* Duration */}
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#6b7280]">
              Time
            </p>
            <p className="mt-1 font-semibold text-white">
              {workout.duration} min
            </p>
          </div>

          {/* Reps */}
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#6b7280]">
              Reps
            </p>
            <p className="mt-1 font-semibold text-white">
              {workout.reps}
            </p>
          </div>

          {/* Rating */}
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#6b7280]">
              Rating
            </p>
            <p className="mt-1 font-semibold text-[#c2f800]">
              ★ {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;