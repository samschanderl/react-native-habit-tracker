import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type HabitProviderProps<T> = {
    children: ReactNode | undefined
}

type HabitContextProps = {
    habits: Habit[],
    setHabits: React.Dispatch<SetStateAction<Habit[]>>,
    addHabit: (h: Habit) => void,
    deleteHabit: (h: Habit) => void,
    updateHabit: (h: Habit) => void,
    habitStatusFilter: HabitStatusFilter[],
    setHabitStatusFilter: React.Dispatch<React.SetStateAction<HabitStatusFilter[]>>,
    activeStatusFilter: HabitStatusFilter
}

type HabitCategory = "personal" | "career" | "health" | "family" | "wellbeing";
type HabitColor = "red" | "blue" | "green" | "orange" | "yellow";

export type Habit = {
    id: string,
    text: string,
    isFinished: boolean,
    category: HabitCategory,
}

const defaultHabit: Habit[] = [];

const HabitContext = createContext<HabitContextProps>({} as HabitContextProps);

export const HabitProvider = ({children}: HabitProviderProps<ReactNode>) => {
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
        {
            id: "4",
            text: "Do 10 minutes of yoga",
            isFinished: false,
            category: "health",
        },
    ];

    const [habitStatusFilter, setHabitStatusFilter] = useState([
        {id: "open", title: "Open", isActive: true},
        {id: "done", title: "Done", isActive: false},
        {id: "all", title: "All", isActive: false}
    ]);
    const activeStatusFilter = habitStatusFilter.find(el => el.isActive) as HabitStatusFilter;
    
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
            setHabits,
            addHabit,
            deleteHabit,
            updateHabit,
            habitStatusFilter, 
            setHabitStatusFilter,
            activeStatusFilter
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