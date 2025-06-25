import { exportToJSONFile } from "../utility/import-export";
import { Button } from "./button.component";

interface HistoryOptionsProps {
	onClear: () => void;
}

export function HistoryOptions({ onClear }: HistoryOptionsProps) {
    return (
        <div className="flex flex-row gap-4 justify-around items-center">
            <div className="flex flex-row gap-4">
                <Button label="Import TODOs" className="p-4" callback={() => {}} />
                <Button label="Export TODOs" className="p-4" callback={() => exportToJSONFile()} />
            </div>
            <Button label="Clear History" className="p-4" callback={() => onClear()} />
        </div>
    );
}