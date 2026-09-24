import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

const WorkoutGrid = async () => {
  const workouts = await getWorkouts();

  if (!workouts.length) {
    return (
      <div className="flex min-h-60 items-center justify-center rounded-2xl border border-white/10 bg-[#15171d]">
        <p className="text-sm text-[#9ca3af]">
          No workouts available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutGrid;