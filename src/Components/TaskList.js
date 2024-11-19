import { useCallback, useState } from "react";
import tasks from "../Data/mockData"

function TaskFilter({ onFilterChange }) {
    //const [currentFilter, setFilter] = useState("All");

    const onTaskFilter = (event) => {
        //setFilter(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <div>
            <label>Filter by Status: </label>
            <select onChange={(e) => onTaskFilter(e)} >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    );

}

function TaskList() {

    const [mockTasks, setTasks] = useState(tasks);

    const filterList = useCallback((filterValue) => {
        if (filterValue === "All") {
            setTasks(tasks);
        }
        else {
            setTasks(tasks.filter(task => {
                if (filterValue == "Completed")
                    return (task.is_completed === true)
                else
                    return (task.is_completed === false)
            }));
        }
    },[tasks]);

    
    function taskReducer(data = null, action, id = null) {
        switch (action.type) {
            case 'ADD':
                tasks.concat(data);
            case 'REMOVE':
                tasks = tasks.filter(x => x.id != id)[0];
            case 'EDIT':
                tasks.filter(x => x.id == id)[0] = data;
        }
        return tasks;
    }

    function markAsComplete(id){  
        setTasks(mockTasks.map(obj => 
            obj.id === id ? { ...obj, is_completed: true } : obj
          ))
    }

    return (
        <>
            <TaskFilter onFilterChange={(filterValue) => filterList(filterValue)} />

            <div className="container">
                {mockTasks.map((task) => (
                    <div className="item" key={task.id}>
                        {
                            (!task.is_completed) && 
                            <input type="checkBox" title="Mark as Complete" onClick={() => markAsComplete(task.id)}/>
                        }
                        {" " + task.description}
                    </div>
                ))}
            </div>
        </>
    );
}

export default TaskList; 