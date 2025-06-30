import { exportToJSONFile, importFromJSONFile } from "../utility/import-export";
import { Button } from "./button.component";

interface HistoryOptionsProps {
    onClear: () => void;
    onImport: (params: { activeTODOs: any; archivedTODOs: any }) => void;
}

export function HistoryOptions({ onClear, onImport }: HistoryOptionsProps) {
    return (
        <div className="flex flex-row gap-4 justify-around items-center">
            <div className="flex flex-row gap-4">
                <Button
                    label="Import TODOs"
                    className="p-4"
                    callback={async () => {
                        const result = await importFromJSONFile();
                        if ("mergedActiveTODOs" in result && "mergedArchivedTODOs" in result) {
                            onImport({
                                activeTODOs: result.mergedActiveTODOs,
                                archivedTODOs: result.mergedArchivedTODOs,
                            });
                        } else if ("oldActiveTODOs" in result && "oldArchivedTODOs" in result) {
                            onImport({
                                activeTODOs: result.oldActiveTODOs,
                                archivedTODOs: result.oldArchivedTODOs,
                            });
                        }
                    }}
                />
                <Button label="Export TODOs" className="p-4" callback={() => exportToJSONFile()} />
            </div>
            <Button label="Clear History" className="p-4" callback={() => onClear()} />
        </div>
    );
}