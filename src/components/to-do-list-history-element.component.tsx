import { formatTime } from "../utility/timer_utility_functions";
import { Button } from "./button.component";
import { ToDoCheckbox } from "./to-do-checkbox.component";
import { ToDoDescription } from "./to-do-description.component";
import { ToDoName } from "./to-do-name.component";

interface ToDoListElementProps {
    selected?: boolean;
    name: string;
    description?: string;
    time?: number;
    onDeleteFromHistory: () => void;
    onRecover: () => void;
    onSelect: () => void;
}

export function ToDoListHistoryElement({
    selected,
    name,
    description,
    time,
    onDeleteFromHistory,
    onRecover,
    onSelect,
}: ToDoListElementProps) {
    return (
        <div
            className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center mb-4"
            onClick={() => onSelect()}
        >
            <ToDoCheckbox onChange={(checked) => !checked ? onRecover() : () => {}} checked />

            <ToDoName name={name} selected={selected ?? false} editMode={false} />

            <div className="flex items-center gap-x-4 h-full w-40">
                <div className="text-sm grow text-center">{formatTime(time ?? 0)}</div>
                <Button
                    className="h-full aspect-square"
                    label="✖"
                    callback={() => onDeleteFromHistory()}
                />
            </div>

            {selected && (
                <>
                    <div />

                    <ToDoDescription description={description} editMode={false} />
                </>
            )}
        </div>
    );
}
