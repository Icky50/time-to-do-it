interface ToDoDescriptionProps {
    description?: string;
}

export function ToDoDescription({ description }: ToDoDescriptionProps) {
    return (
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
    );
}
