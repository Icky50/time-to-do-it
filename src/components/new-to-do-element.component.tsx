import { Button } from "./button.component";

export function NewToDoElement() {
    return (
        <div className="flex flex-col gap-y-4 px-4 rounded-md">
            <input
                type="text"
                placeholder="New TODO"
                className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-row gap-4">
                <textarea
                    placeholder="Description"
                    className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={3}
                />
                <Button className="w-sm" label="Add" />
            </div>
        </div>
    );
}
