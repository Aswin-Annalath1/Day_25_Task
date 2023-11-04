
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mytodo from './Components/Mytodo';
import TodoSection from './Components/TodoSection';
import EditTodo from './Components/EditTodo';

function App() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Mytodo/>}/>

      <Route path="/edit/:id" element={<EditTodo/>}/>
      
    </Routes>
    </>
  );
}

export default App;
