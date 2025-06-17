import { Button } from "./button.component";

interface ToDoListElementProps {
    selected?: boolean;
}

export function ToDoListElement({ selected }: ToDoListElementProps) {
    return (
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center mb-4">
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
            />

            <div
                className="bg-transparent
                        border border-white/30
                        rounded-md
                        p-4 w-full"
            >
                Name
            </div>

            <div className="flex items-center gap-x-4 h-full">
                <div className="text-sm grow text-center">00:00</div>

                <Button className="p-4 h-full aspect-square" label="▶" />
                <Button className="p-4 h-full aspect-square" label="✖" />
            </div>

            {selected && (
                <>
                    <div />

                    <textarea
                        defaultValue="Description"
                        className="
							bg-transparent
							border border-white/30
							rounded-md
							px-3 py-2
							placeholder-white/50
							min-h-[70px]
							w-full
							resize-none
						"
                        rows={3}
                        readOnly
                        disabled
                    />

                    <div className="flex gap-4">
                        <Button className="p-4 aspect-square" label="🖊" />
                        <Button className="w-full p-4" label="Reset Timer" />
                    </div>
                </>
            )}
        </div>
    );
}
