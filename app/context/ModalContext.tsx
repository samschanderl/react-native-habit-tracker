import { createContext, useContext, useState } from "react";

type ModalState = {
    selectedModal: string,
    isActive: boolean
}

type ModalContextType = {
    activeModal: ModalState;
    setActiveModal: React.Dispatch<React.SetStateAction<ModalState>>
}

type ModalProviderProps = {
    children: React.ReactNode
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({children}: ModalProviderProps) => {
    const [activeModal, setActiveModal] = useState<ModalState>({selectedModal: '', isActive: false});

    return (
    <ModalContext.Provider
    value={{activeModal, setActiveModal}}
    >
        {children}
    </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within the Modal Context Provider");
    }
    return context;
}