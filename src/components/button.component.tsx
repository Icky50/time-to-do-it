interface ButtonProps {
    callback?: () => void;
    label: string;
    className?: string;
}

export function Button({ callback, label, className }: ButtonProps) {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md transition items-center ${
                className || ""
            }`}
            onClick={callback}
        >
            <p className="text-center">{label}</p>
        </button>
    );
}
