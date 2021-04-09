import { Action } from './actions';
import { nanoid } from "nanoid";
import { moveItem } from './../utils/arrayUtils';

export type Task = {
    id: string,
    text: string
}

export type List = {
    id: string,
    text: string,
    tasks: Task[],
}

export type AppState = {
    lists: List[]
};

export const appStateReducer = (state: AppState,action: Action) => {
    switch (action.type) {
        case "ADD_LIST": {
            return {
                ...state,
                lists: [...state.lists,{id : nanoid(), text: action.payload, tasks: []}]
            }
        }
        case "ADD_TASK": {
            
            const { listId, text } = action.payload;
            console.log(listId, text)
            const targetListIndex = state.lists.findIndex(listItem => listItem.id === listId)
            let targetList = state.lists[targetListIndex];
            let newTargetList = { 
                ...targetList,
                tasks: [...targetList.tasks,{id: nanoid(), text }]
             }
            let newLists = [...state.lists.slice(0,targetListIndex), newTargetList, ...state.lists.slice(targetListIndex + 1, state.lists.length)]
            return {
                ...state,
                lists: newLists
            }
        }

        case "MOVE_LIST": {
           ;
            const { hoverId, draggedId } = action.payload;
            const dragIndex = state.lists.findIndex(listItem => listItem.id === draggedId);
            const hoverIndex = state.lists.findIndex(listItem => listItem.id === hoverId);
            let newLists = moveItem([...state.lists], dragIndex, hoverIndex);
            return {
                ...state,
                lists: newLists
            }
        }
        default: {
            return state;
        }
    }
}