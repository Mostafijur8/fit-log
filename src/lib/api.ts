import type { IWorkout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch(API_URL);


  if (!res.ok) {
    throw new Error(`Failed to fetch workouts: ${res.status}`);
  }

  const data: IWorkout[] = await res.json();

  console.log("API DATA:", data);

  return data;
};