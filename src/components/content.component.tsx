interface ContentProps {
    children?: React.ReactNode;
}

export function Content({ children }: ContentProps) {
    return (
        <div className="flex flex-col flex-1 p-4 rounded-md bg-gray-400 mr-4 mb-4">
            {children}
        </div>
    );
}