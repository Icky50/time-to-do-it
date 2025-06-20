import { useEffect, useState } from "react";
import { NewToDoElement } from "../components/new-to-do-element.component";
import { ToDoListElement } from "../components/to-do-list-element.component";

class ToDoElement {
    id: string;
    name: string;
    description: string;
    time: number;

    constructor(id: string, name: string, description: string, time: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.time = time;
    }
}

export function TODO() {
    const [toDoElements, setToDoElements] = useState<ToDoElement[]>([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [selectedElementID, setSelectedElementID] = useState<string>("");

    useEffect(() => {
        const saved = localStorage.getItem("toDoElements");
        if (saved) {
            setToDoElements(JSON.parse(saved));
        }
        setHasLoaded(true);
    }, []);

    useEffect(() => {
        if (!hasLoaded) return;
        localStorage.setItem("toDoElements", JSON.stringify(toDoElements));
    }, [toDoElements, hasLoaded]);

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

    const getHTMLElements = () => {
        return toDoElements.map((element, index) => (
            <ToDoListElement
				name={element.name}
				description={element.description}
				time={element.time}
                key={element.id}
                onRemove={() => handleRemoveToDo(element.id)}
                // selected={selectedElementID === element.id}
				selected={index === 3}
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
