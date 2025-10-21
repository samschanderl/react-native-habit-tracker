import { createContext, useContext, useState } from "react";

type HabitProviderProps = {
    children: React.ReactNode
}

type HabitContextProps = {
    
}

type HabitCategory = "personal" | "career" | "health" | "family";
type HabitColor = "red" | "blue" | "green" | "orange" | "yellow";

type Habit = {
    id: string,
    text: string,
    isFinished: boolean,
    category: HabitCategory,
    color: HabitColor
}

const defaultHabit: Habit[] = [];

const HabitContext = createContext<HabitContextProps>(defaultHabit);

const HabitContextProvider = ({children}: HabitProviderProps): HabitContextProps => {
    const [habits, setHabits] = useState<Habit[]>([]);

    const addHabit = (habit: Habit): void => {
        setHabits([...habits, habit]);
    }

    const deleteHabit = (habit: Habit): void => {
        setHabits(habits.filter(el => el.id !== habit.id));
    }

    const updateHabit = (habit: Habit): void => {
        setHabits(habits.map(el => {
            if (el.id !== habit.id) return el;
            return habit
        }));
    }

    return (
        <HabitContext.Provider
        value={
{            habits,
            addHabit,
            deleteHabit,
            updateHabit
        }}
        >
            {children}
        </HabitContext.Provider>
    )
}

export const useHabits = () => {
    const context = useContext(HabitContext);
    if (!context) {
        throw new Error("useHabit must called be within the Habit Context Provider");
    }
    return context;
}