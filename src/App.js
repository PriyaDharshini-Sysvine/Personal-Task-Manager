import './App.css';
import TaskList from './Components/TaskList';
import { TaskProvider } from './Components/TaskContext';

function App() {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
}

export default App;
