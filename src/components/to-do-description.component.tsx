interface ToDoDescriptionProps {
    description?: string;
    editMode: boolean;
    onChange?: (description: string) => void;
}

export function ToDoDescription({
    description,
    editMode,
    onChange,
}: ToDoDescriptionProps) {
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
                focus:outline-none
				"
            rows={3}
            readOnly={!editMode}
            disabled={!editMode}
            placeholder="No description"
            onChange={(e) => {
                if (editMode && e.target.value) {
                    onChange?.((e.target.value ?? "").trim());
                }
            }}
        />
    );
}
