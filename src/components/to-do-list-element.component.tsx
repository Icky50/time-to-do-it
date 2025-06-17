interface ToDoListElementProps {
    selected?: boolean;
}

export function ToDoListElement({ selected }: ToDoListElementProps) {
    return (
        <div>
            <div>
                <div
                    className={`flex flex-row gap-4 ${selected ? "" : "mb-4"}`}
                >
                    <div className="rounded-md border border-blue-500 p-4">
                        Checkbox
                    </div>
                    <div className="rounded-md grow border border-blue-500 p-4">
                        Name
                    </div>
                    <div className="rounded-md border border-blue-500 p-4">
                        Time
                    </div>
                    <div className="rounded-md border border-blue-500 p-4">
                        Play / Pause
                    </div>
                    <div className="rounded-md border border-blue-500 p-4">
                        Delete
                    </div>
                </div>
                {selected && (
                    <div className="flex flex-row gap-4 mb-4 h-30 items-center">
                        <div className="rounded-md border border-blue-500 p-4 invisible">
                            Checkbox
                        </div>
                        <div className="rounded-md border border-blue-500 p-4 grow h-30">
                            Description
                        </div>
                        <div className="rounded-md border border-blue-500 p-4 h-fit">
                            Edit
                        </div>
                        <div className="rounded-md border border-blue-500 p-4 h-fit">
                            Reset Timer
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
