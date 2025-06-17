interface ContentProps {
    children?: React.ReactNode;
}

export function Content({ children }: ContentProps) {
    return (
        <div className="flex flex-col justify-between w-full mr-4 h-[32rem] p-4 rounded-md bg-gray-400">
            {children}
        </div>
    );
}
