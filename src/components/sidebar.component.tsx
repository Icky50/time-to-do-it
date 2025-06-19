import { Button } from "./button.component";

function changePage(page: string) {
    window.history.pushState({}, "", page);
    window.dispatchEvent(new Event("popstate"));
}

export function Sidebar() {
    return (
        <div className="flex flex-col justify-between w-3xs p-4 rounded-md bg-gray-400 ml-4 mb-4">
            <div className="space-y-4">
                <Button className="w-full p-4" label="TODOs" callback={() => changePage("/")} />
                <Button className="w-full p-4" label="History" callback={() => changePage("/history")} />
                <Button className="w-full p-4" label="Graphs" callback={() => changePage("/graphs")} />
            </div>
            <div className="flex gap-4">
                <Button className="w-full p-4" label="About" callback={() => changePage("/about")} />
                <Button className="p-4 aspect-square" label="☀" />
            </div>
        </div>
    );
}
