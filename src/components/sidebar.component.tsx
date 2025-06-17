import { Button } from "./button.component";

export function Sidebar() {
    return (
        <div className="flex flex-col justify-between w-48 p-4 rounded-md bg-gray-400 ml-4 mb-4">
            <div className="space-y-3">
                <Button className="w-full h-12" label="TODOs" />
                <Button className="w-full h-12" label="History" />
                <Button className="w-full h-12" label="Graphs" />
            </div>
            <div className="flex gap-3 mt-3">
                <Button className="w-full h-12" label="About" />
                <Button className="h-12 aspect-square" label="☀" />
            </div>
        </div>
    );
}
