import { AppContainer } from './styles';
import { Column } from './Column';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './state/AppStateContext';
import { addList } from "./state/actions";

export default function App() {
  const { lists, dispatch }= useAppState();
  return (
   <AppContainer>
     {lists.map((list) => {
       return  <Column text={list.text} key={list.id} id={list.id}/>
     })}
     <AddNewItem  toggleButtonText="+ Add Another List" onAdd={(text) => dispatch(addList(text))}/>
   </AppContainer>
  );
}


