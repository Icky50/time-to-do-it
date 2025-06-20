import { useState } from "react";
import { Button } from "./button.component";

interface NewToDoElementProps {
    onAdd: (title: string, description: string) => void;
}

export function NewToDoElement({ onAdd }: NewToDoElementProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="flex flex-col gap-y-4 px-4 rounded-md">
            <input
                type="text"
                placeholder="New TODO"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-row gap-4">
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={3}
                />
                <Button
                    className="w-sm"
                    label="Add"
                    callback={() => {
                        if (!title.trim()) return;
                        onAdd(title, description);
                        setTitle("");
                        setDescription("");
                    }}
                    disabled={!title.trim()}
                />
            </div>
        </div>
    );
}
