import { useTaskManager } from "./TaskContext";

export function TaskFilter() {
    var { filterTasks } = useTaskManager();

    function onFilterChange(event) {
        if (event === undefined)
            return;
        filterTasks(event.target.value);
    }

    return (
        <div>
            <label>Filter by Status: </label>
            <select onChange={(e) => onFilterChange(e)} >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    );

}