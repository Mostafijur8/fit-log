"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { IWorkout } from "@/types/workout";

interface FitlogContextType {
  planWorkouts: IWorkout[];
  savedWorkouts: IWorkout[];
  completedWorkoutIds: number[];

  addToPlan: (workout: IWorkout) => void;
  saveForLater: (workout: IWorkout) => void;

  removeFromPlan: (workoutId: number) => void;
  removeFromSaved: (workoutId: number) => void;

  markAsDone: (workoutId: number) => void;
}

const FitlogContext = createContext<FitlogContextType | undefined>(
  undefined,
);

interface FitlogProviderProps {
  children: ReactNode;
}

export const FitlogProvider = ({
  children,
}: FitlogProviderProps) => {
  const [planWorkouts, setPlanWorkouts] = useState<IWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

  const [completedWorkoutIds, setCompletedWorkoutIds] =
    useState<number[]>([]);

  // Add workout to Today's Plan
  const addToPlan = (workout: IWorkout) => {
    setPlanWorkouts((current) => {
      const alreadyAdded = current.some(
        (item) => item.id === workout.id,
      );

      if (alreadyAdded) {
        return current;
      }

      return [...current, workout];
    });
  };

  // Save workout for later
  const saveForLater = (workout: IWorkout) => {
    setSavedWorkouts((current) => {
      const alreadySaved = current.some(
        (item) => item.id === workout.id,
      );

      if (alreadySaved) {
        return current;
      }

      return [...current, workout];
    });
  };

  // Remove from Today's Plan
  const removeFromPlan = (workoutId: number) => {
    setPlanWorkouts((current) =>
      current.filter((item) => item.id !== workoutId),
    );
  };

  // Remove from Saved
  const removeFromSaved = (workoutId: number) => {
    setSavedWorkouts((current) =>
      current.filter((item) => item.id !== workoutId),
    );
  };

  // Mark workout as completed
  const markAsDone = (workoutId: number) => {
    setCompletedWorkoutIds((current) => {
      if (current.includes(workoutId)) {
        return current;
      }

      return [...current, workoutId];
    });
  };

  return (
    <FitlogContext.Provider
      value={{
        planWorkouts,
        savedWorkouts,
        completedWorkoutIds,

        addToPlan,
        saveForLater,

        removeFromPlan,
        removeFromSaved,

        markAsDone,
      }}
    >
      {children}
    </FitlogContext.Provider>
  );
};

export const useFitlog = () => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error(
      "useFitlog must be used inside FitlogProvider",
    );
  }

  return context;
};