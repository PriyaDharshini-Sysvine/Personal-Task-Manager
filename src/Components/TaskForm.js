import React, { useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTaskManager } from './TaskContext';

export function TaskAddForm() {
    var { taskTitleRef, showModal, dispatch, tasks, setShowModal } = useTaskManager();
    const taskDescRef = useRef(null);
    return (
        <> {/* Modal for adding a new task */}
            < Modal show={showModal} onHide={() => setShowModal(false)
            }>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control"
                        ref={taskTitleRef}
                        placeholder="Enter task title"
                    />
                    <input
                        type="text"
                        className="form-control"
                        ref={taskDescRef}
                        placeholder="Enter task description"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => dispatch({
                        id: tasks.length + 1
                        , title: taskTitleRef.current.value
                        , description: taskDescRef.current.value
                        , is_completed: false
                        , modified_date: null
                        , taskDescRef: taskDescRef
                    }, 'ADD', null)}>
                        Add Task
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );

}

export function TaskEditForm() {
    var { taskTitleRef, showModal, dispatch, tasks, setShowModal, selectedTask } = useTaskManager();
    const taskDescRef = useRef(null);
    return (
        <> {/* Modal for adding a new task */}
            < Modal show={showModal} onHide={() => setShowModal(false)
            }>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control"
                        value={selectedTask.title}
                        ref={taskTitleRef}
                        placeholder="Enter task title"
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={selectedTask.description}
                        ref={taskDescRef}
                        placeholder="Enter task description"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => dispatch({
                        id: tasks.length + 1
                        , title: taskTitleRef.current.value
                        , description: taskDescRef.current.value
                        , is_completed: false
                        , modified_date: Date.now()
                        , taskDescRef: taskDescRef
                    }, 'EDIT', null)}>
                        Edit Task
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );

}