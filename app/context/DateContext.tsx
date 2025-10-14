import { createContext, useContext, useEffect, useState } from "react"

type DateProviderProps = {
    children: React.ReactNode
}

type DateContextProps = {
    selectedDates: SelectedDayProps[],
    updateSelectedDates: () => void
}

type SelectedDayProps = {
    isActive: boolean;
    day: string,
    month: string,
    year: string
}

const defaultDate = {
    isActive: false,
    day: '',
    month: '',
    year: ''
}

const DateContext = createContext<DateContextProps>({
    selectedDates: [defaultDate],
    updateSelectedDates: () => {}
});

const DateContextProvider = ({children}: DateProviderProps) => {
    let [selectedDates, setSelectedDates] = useState<SelectedDayProps[]>([defaultDate]);
    
    let updateSelectedDates = ():void => {
        let arr: SelectedDayProps[]= [];
        setSelectedDates(arr);
    };

    // get current dates on first load
    useEffect(() => {
        console.warn('Date context')
    }, [])

    return (
        <DateContext.Provider
            value={{
                selectedDates,
                updateSelectedDates
            }}
        >
            {children}
        </DateContext.Provider>
    );
}

export const useDate = () => {
    const context = useContext(DateContext);
    if (!context) {
        throw new Error("useDate must be used within the Date Context Provider");
    }
    return context;
}