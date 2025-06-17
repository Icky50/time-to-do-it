import { Button } from "./button.component";

export function Sidebar() {
    return (
        <div className="flex flex-col justify-between w-3xs p-4 rounded-md bg-gray-400 ml-4 mb-4">
            <div className="space-y-4">
                <Button className="w-full p-4" label="TODOs" />
                <Button className="w-full p-4" label="History" />
                <Button className="w-full p-4" label="Graphs" />
            </div>
            <div className="flex gap-4">
                <Button className="w-full p-4" label="About" />
                <Button className="p-4 aspect-square" label="☀" />
            </div>
        </div>
    );
}
