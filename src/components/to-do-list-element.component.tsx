import { Button } from "./button.component";

interface ToDoListElementProps {
    selected?: boolean;
    name: string;
    description?: string;
    time?: number;
    onRemove: () => void;
    onSelect: () => void;
    onCheck: () => void;
}

export function ToDoListElement({
    selected,
    name,
    description,
    time,
    onRemove,
    onSelect,
    onCheck,
}: ToDoListElementProps) {
    return (
        <div
            className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center mb-4"
            onClick={() => onSelect()}
        >
            <input
                type="checkbox"
                className="
					w-6 h-6
					rounded-full
					border border-white/70
					bg-transparent
					appearance-none
					checked:bg-white/70
					checked:border-white
					flex items-center justify-center
					cursor-pointer
					transition-colors
				"
                onChange={() => onCheck()}
            />

            <div
                className={`rounded-t-md
                        bg-blue-500
                        p-4 w-full ${
                            !selected
                                ? "rounded-b-md border-gray-400 border-b box-border"
                                : ""
                        }`}
            >
                {name !== "" ? name : "TODO"}
            </div>

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

                    <textarea
                        defaultValue={description || "No description"}
                        className="
							bg-blue-500
                            border-t-3 border-gray-400
							rounded-b-md
							px-3 py-2
							min-h-[70px]
							w-full
							resize-none
						"
                        rows={3}
                        readOnly
                        disabled
                    />

                    <div className="flex gap-x-4">
                        <Button className="px-5 aspect-square" label="🖊" />
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
