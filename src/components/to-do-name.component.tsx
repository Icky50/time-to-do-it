interface ToDoNameProps {
    name: string;
    selected: boolean;
}

export function ToDoName({ name, selected }: ToDoNameProps) {
    return (
        <div
            className={`rounded-t-md
								bg-blue-500
								p-4 w-full ${
                                    !selected
                                        ? "rounded-b-md border-gray-400 border-b box-border"
                                        : ""
                                }`}
        >
            {name}
        </div>
    );
}
