import { NewToDoElement } from "../components/new-to-do-element.component";
import { ToDoListElement } from "../components/to-do-list-element.component";

export function TODO() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <ToDoListElement />
                <ToDoListElement selected />
                <ToDoListElement />
                <ToDoListElement />
                <ToDoListElement />
            </div>
            <div>
                <NewToDoElement />
            </div>
        </div>
    );
}
