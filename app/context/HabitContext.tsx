import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type HabitProviderProps = {
    children: ReactNode | undefined
}

type HabitContextProps = {
    
}

type HabitCategory = "personal" | "career" | "health" | "family";
type HabitColor = "red" | "blue" | "green" | "orange" | "yellow";

export type Habit = {
    id: string,
    text: string,
    isFinished: boolean,
    category: HabitCategory,
}

const defaultHabit: Habit[] = [];

const HabitContext = createContext<HabitContextProps>(defaultHabit);

export const HabitProvider = ({children}: HabitProviderProps): ReactNode | Promise<ReactNode> => {
    const defaultHabits: Habit[] = [
        {
            id: "1", // CREATE TIMESTAMP ID
            text: "Go to the gym",
            isFinished: true,
            category: "health",
        },
        {
            id: "2",
            text: "Learn a new language for 5 minutes",
            isFinished: false,
            category: "personal",
        },
        {
            id: "3",
            text: "Read a story to my children",
            isFinished: false,
            category: "family",
        },
    ]
    
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

    useEffect(() => {
        console.warn('setting default habits', defaultHabits);
        setHabits([...defaultHabits]);
    }, [])

    return (
        <HabitContext.Provider
        value={{          
            habits,
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