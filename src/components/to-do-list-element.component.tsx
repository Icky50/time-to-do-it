import { useEffect, useState } from "react";
import { Button } from "./button.component";
import { ToDoCheckbox } from "./to-do-checkbox.component";
import { ToDoDescription } from "./to-do-description.component";
import { ToDoName } from "./to-do-name.component";

interface ToDoListElementProps {
    selected?: boolean;
    name: string;
    description?: string;
    time?: number;
    onRemove: () => void;
    onSelect: () => void;
    onCheck: () => void;
    onEditConfirmed: (title: string, description: string) => void;
}

export function ToDoListElement({
    selected,
    name,
    description,
    time,
    onRemove,
    onSelect,
    onCheck,
    onEditConfirmed,
}: ToDoListElementProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [nameState ,setName] = useState(name);
    const [descriptionState ,setDescription] = useState(description ?? "");

    useEffect(() => {
        if (!selected) {
            setIsEditing(false);
            setName(name);
            setDescription(description ?? "");
        }
    }, [selected, name, description]);

    return (
        <div
            className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center mb-4"
            onClick={() => onSelect()}
        >
            <ToDoCheckbox onChange={() => onCheck()} />

            <ToDoName name={nameState} selected={selected ?? false} editMode={isEditing} onChange={setName} />

            <div className="flex items-center gap-x-4 h-full w-3xs">
                <div className="text-sm grow text-center">{time}</div>

                <Button className="h-full aspect-square" label="▶" />
                <Button
                    className="h-full aspect-square"
                    label="✖"
                    callback={() => onRemove()}
                />
            </div>

            {selected && (
                <>
                    <div />

                    <ToDoDescription description={descriptionState} editMode={isEditing} onChange={setDescription} />

                    <div className="flex gap-x-4">
                        {isEditing ? (<Button className="px-5 aspect-square" label="✔" callback={() => {setIsEditing(false); onEditConfirmed(nameState, descriptionState ?? "")}} />) : (<Button className="px-5 aspect-square" label="🖊" callback={() => setIsEditing(true)} />)}
                        
                        <Button
                            className="w-full h-full p-4"
                            label="Reset Timer"
                        />
                    </div>
                </>
            )}
        </div>
    );
}
