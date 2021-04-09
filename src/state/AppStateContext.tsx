
import { createContext, useContext, Dispatch, FC, useReducer } from "react";
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { Action } from './actions';

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);


// type Task = {
//     id: string,
//     text: string
// }

// type List = {
//     id: string,
//     text: string
//     tasks: Task[]
// }

type AppStateContextProps = {
    lists: List[],
    getTaskByListId(id: string): Task[]
    dispatch: Dispatch<Action>
};

const appData = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [
                { id: "c0", text: "Generate App Scaffold" }
            ]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [
                { id: "b0", text: "Generate App Scaffold" }
            ]
        },
        {
            id: "2",
            text: "Done",
            tasks: [
                { id: "d0", text: "Generate App Scaffold" }
            ]
        },
    ]
}

// export type AppState = {
//     lists: List[]
// }

export const AppStateProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(appStateReducer, appData)
    const { lists } = state;

    const getTaskByListId = (id : string) => {
        return lists.find(list => list.id === id)?.tasks || [];
    }

    return (
        <AppStateContext.Provider value={{ lists, getTaskByListId, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
};

export const useAppState = () => {
    return useContext(AppStateContext)
};