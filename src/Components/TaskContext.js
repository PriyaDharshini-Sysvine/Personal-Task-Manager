import React, { createContext, useContext, useReducer, useState, useCallback } from 'react';

const TaskContext = createContext();

export const useTaskManager = () => {
    return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([
        {
            id: 1
            , title: "Task 1"
            , description: "Using create react app command, create a react app"
            , is_completed: true
            , modified_date: null
        },
        {
            id: 2
            , title: "Task 2"
            , description: "Display list of tasks from mock Object and show option to edit, remove and complete"
            , is_completed: false
            , modified_date: null
        },
        {
            id: 3
            , title: "Task 3"
            , description: "Test Description"
            , is_completed: true
            , modified_date: null
        },
        {
            id: 4
            , title: "Task 4"
            , description: "Task numbered 4"
            , is_completed: false
            , modified_date: null
        },
        {
            id: 5
            , title: "Task 5"
            , description: "Submit Timesheet"
            , is_completed: true
            , modified_date: null
        },
        {
            id: 6
            , title: "Task 6"
            , description: "6th Task"
            , is_completed: true
            , modified_date: null
        }
    ]);

    var [filteredTasks, setFilteredTasks] = useState(tasks);

    const filterTasks = useCallback((filterVal) => {
        if (filterVal === "All") {
            setFilteredTasks(mockTasks);
        }
        else {
            setFilteredTasks(mockTasks.filter(task => {
                if (filterVal === "Completed")
                    return (task.is_completed === true)
                else
                    return (task.is_completed === false)
            }));
        }
    });

    const taskReducer = useCallback((data = null, action, id = null) => {
        switch (action) {
            case 'ADD':
                mockTasks.concat(data);
            case 'REMOVE':
                mockTasks = tasks.filter(x => x.id !== id)[0];
            case 'EDIT':
                mockTasks.filter(x => x.id === id)[0] = data;
            case 'COMPLETE':
                mockTasks.map(obj =>
                    obj.id === id ? { ...obj, is_completed: true } : obj
                );
            default:
                setTasks(mockTasks);
        }
        setTasks(mockTasks);
        return mockTasks;
    }, [mockTasks]);

    var [mockTasks, dispatch] = useReducer(taskReducer, tasks);

    return (
        <TaskContext.Provider value={{ mockTasks, dispatch, filteredTasks, filterTasks }}>
            {children}
        </TaskContext.Provider>
    );
};