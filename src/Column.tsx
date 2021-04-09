
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from './AddNewItem';
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";

type ColumnProps = {
    text: String,
    id: string
};

export const Column = ({ text, id }: ColumnProps) => {

    const { getTaskByListId, dispatch} = useAppState();
    const tasks = getTaskByListId(id);

    return( 
    <ColumnContainer>
        <ColumnTitle> {text} </ColumnTitle> 
        {tasks.map(task => {
            return <Card text={task.text} key={task.id} id={task.id}/>
        })}
        <AddNewItem dark toggleButtonText="+ Add New Item" onAdd={(text) => dispatch(addTask(text, id))}/>
    </ColumnContainer>
    )
}