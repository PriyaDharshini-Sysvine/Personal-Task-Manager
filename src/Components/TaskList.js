import { useTaskManager } from "./TaskContext";
import { TaskFilter } from "./TaskFilter";

function TaskList() {

    const { filteredTasks, dispatch } = useTaskManager();

    return (
        <>
            <TaskFilter />

            <div className="container">
                {filteredTasks.map((task) => (
                    <div className="item" key={task.id}>
                        {
                            (!task.is_completed) &&
                            <input type="checkBox" title="Mark as Complete" onClick={() => dispatch(null, 'COMPLETE', task.id)} />
                        }
                        {" " + task.description}
                    </div>
                ))}
            </div>
        </>
    );
}

export default TaskList; 