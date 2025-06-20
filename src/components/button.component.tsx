interface ButtonProps {
    callback?: () => void;
    label: string;
    className?: string;
    disabled?: boolean;
}

export function Button({ callback, label, className, disabled }: ButtonProps) {
    return (
        <button
            className={`${disabled ? "bg-gray-500" :"bg-blue-500 hover:bg-blue-700"} text-white font-bold rounded-md transition items-center ${
                className || ""
            }`}
            onClick={callback}
            disabled={disabled}
        >
            <p className="text-center">{label}</p>
        </button>
    );
}
