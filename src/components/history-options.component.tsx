import { Button } from "./button.component";

interface HistoryOptionsProps {
	onImport?: () => void;
	onExport?: () => void;
	onClear?: () => void;
}

export function HistoryOptions({ onImport, onExport, onClear }: HistoryOptionsProps) {
    return (
        <div className="flex flex-row gap-4 justify-around items-center">
            <div className="flex flex-row gap-4">
                <Button label="Import TODOs" className="p-4" callback={() => onImport?.()} />
                <Button label="Export TODOs" className="p-4" callback={() => onExport?.()} />
            </div>
            <Button label="Clear History" className="p-4" callback={() => onClear?.()} />
        </div>
    );
}
