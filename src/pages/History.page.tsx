import { useEffect, useState } from "react";
import { ToDoElement } from "../models/to-do-element.model";
import { ToDoListHistoryElement } from "../components/to-do-list-history-element.component";

export function History() {
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

    const handleDeleteFromHistory = (id: string) => {
        setToDoElementsHistory((previous) =>
            previous.filter((element) => element.id !== id)
        );
    };

    const handleRecoverFromHistory = (id: string) => {
        const element = toDoElementsHistory.find((el) => el.id === id);
        if (element) {
            setToDoElements((previous) => [...previous, element]);
            setToDoElementsHistory((previous) =>
                previous.filter((el) => el.id !== id)
            );
        }
    }

    const getHTMLElements = () => {
            return toDoElementsHistory.map((element) => (
                <ToDoListHistoryElement
                    name={element.name}
                    description={element.description}
                    time={element.time}
                    key={element.id}
                    onDeleteFromHistory={() => handleDeleteFromHistory(element.id)}
                    onRecover={() => handleRecoverFromHistory(element.id)}
                    onSelect={() => setSelectedElementID(element.id)}
                    selected={selectedElementID === element.id}
                />
            ));
        };

    return (
        <div className="flex flex-col justify-between h-full">
            <div>{getHTMLElements()}</div>
            <div>
                
            </div>
        </div>
    );
}
