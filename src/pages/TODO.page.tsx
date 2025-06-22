import { useEffect, useState } from "react";
import { NewToDoElement } from "../components/new-to-do-element.component";
import { ToDoListElement } from "../components/to-do-list-element.component";
import { ToDoElement } from "../models/to-do-element.model";

export function TODO() {
    const [toDoElements, setToDoElements] = useState<ToDoElement[]>([]);
    const [toDoElementsHistory, setToDoElementsHistory] = useState<
        ToDoElement[]
    >([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [selectedElementID, setSelectedElementID] = useState<string>("");

    useEffect(() => {
        const savedToDoElementsHistory = localStorage.getItem(
            "toDoElementsHistory"
        );
        const savedToDoElements = localStorage.getItem("toDoElements");
        if (savedToDoElementsHistory) {
            setToDoElementsHistory(JSON.parse(savedToDoElementsHistory));
        }
        if (savedToDoElements) {
            setToDoElements(JSON.parse(savedToDoElements));
        }
        setHasLoaded(true);
    }, []);

    useEffect(() => {
        if (!hasLoaded) return;
        localStorage.setItem("toDoElements", JSON.stringify(toDoElements));
    }, [toDoElements, hasLoaded]);

    useEffect(() => {
        if (!hasLoaded) return;
        localStorage.setItem(
            "toDoElementsHistory",
            JSON.stringify(toDoElementsHistory)
        );
    }, [toDoElementsHistory, hasLoaded]);

    const handleAddToDo = (title: string, description: string) => {
        const newElement = new ToDoElement(
            Math.random().toString(36).substring(2, 15),
            title,
            description,
            0
        );
        setToDoElements([...toDoElements, newElement]);
    };

    const handleRemoveToDo = (id: string) => {
        setToDoElements((previous) =>
            previous.filter((element) => element.id !== id)
        );
    };

    const handleCheckToDo = (id: string) => {
        // add to history
        const element = toDoElements.find((el) => el.id === id);
        if (element) {
            let updatedElement = element;
            if (element.isTimerRunning && element.lastTimerStart !== null) {
                const now = Date.now();
                updatedElement = new ToDoElement(
                    element.id,
                    element.name,
                    element.description,
                    element.time + (now - element.lastTimerStart),
                    false,
                    null
                );
            }
            setToDoElementsHistory((previous) => [...previous, updatedElement]);
        }
        // remove from current list
        setToDoElements((previous) =>
            previous.filter((element) => element.id !== id)
        );
    };

    const handleEditConfirmed = (id: string, title: string, description: string) => {
        setToDoElements((previous) =>
            previous.map((element) =>
                element.id === id
                    ? new ToDoElement(element.id, title, description, element.time)
                    : element
            )
        );
    };

    const handleTimerUpdate = (updatedTimer: {
        id: string;
        isRunning: boolean;
        startTime: number | null;
        elapsedTime: number;
    }) => {
        setToDoElements((previous) =>
            previous.map((element) =>
                element.id === updatedTimer.id
                    ? new ToDoElement(
                          element.id,
                          element.name,
                          element.description,
                          updatedTimer.elapsedTime,
                          updatedTimer.isRunning,
                          updatedTimer.startTime
                      )
                    : element
            )
        );
    };

    const getHTMLElements = () => {
        return toDoElements.map((element) => (
            <ToDoListElement
                id={element.id}
                name={element.name}
                description={element.description}
                time={element.time}
                isTimerRunning={element.isTimerRunning}
                lastTimerStartTime={element.lastTimerStart}
                key={element.id}
                onRemove={() => handleRemoveToDo(element.id)}
                onSelect={() => setSelectedElementID(element.id)}
                onCheck={() => handleCheckToDo(element.id)}
                selected={selectedElementID === element.id}
                onEditConfirmed={(title, description) =>
                    handleEditConfirmed(element.id, title, description)
                }
                onTimerUpdate={handleTimerUpdate}
            />
        ));
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div>{getHTMLElements()}</div>
            <div>
                <NewToDoElement onAdd={handleAddToDo} />
            </div>
        </div>
    );
}
