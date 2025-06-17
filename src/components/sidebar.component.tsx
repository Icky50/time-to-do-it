import { Button } from "./button.component";

export function Sidebar() {
    return (
        <div className="flex flex-col justify-between w-48 h-[32rem] p-4 rounded-md bg-gray-400 ml-4">
            <div className="space-y-3">
                <Button className="w-full px-4 py-2" label="TODOs" />
                <Button className="w-full px-4 py-2" label="History" />
                <Button className="w-full px-4 py-2" label="Graph" />
            </div>

            <Button className="w-full px-4 py-2" label="About" />
        </div>
    );
}
