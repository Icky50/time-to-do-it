interface ToDoNameProps {
    name: string;
    selected: boolean;
    editMode: boolean;
    onChange?: (name: string) => void;
}

export function ToDoName({ name, selected, editMode, onChange }: ToDoNameProps) {

    return editMode ? (
        <input
            type="text"
            value={name}
            className={`w-full p-4 rounded-t-md bg-blue-500 focus:outline-none ${
                !selected
                    ? "rounded-b-md border-gray-400 border-b box-border"
                    : ""
            }`}
            onChange={(e) => {
                if (editMode && e.target.value) {
                    onChange?.((e.target.value ?? "").trim());
                }
            }}
        />
    ) : (
        <div
            className={`rounded-t-md bg-blue-500 p-4 w-full ${
                !selected
                    ? "rounded-b-md border-gray-400 border-b box-border"
                    : ""
            }`}
        >
            {name}
        </div>
    );
}