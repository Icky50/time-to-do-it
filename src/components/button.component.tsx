interface ButtonProps {
    callback?: () => void;
    label: string;
    className?: string;
}

export function Button({ callback, label, className }: ButtonProps) {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md transition ${
                className || ""
            }`}
            onClick={callback}
        >
            {label}
        </button>
    );
}
