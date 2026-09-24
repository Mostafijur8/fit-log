import WorkoutDetails from "@/components/workout/WorkoutDetails";
import { getWorkouts } from "@/lib/api";

import { notFound } from "next/navigation";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
  const { id } = await params;

  const workouts = await getWorkouts();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutPage;