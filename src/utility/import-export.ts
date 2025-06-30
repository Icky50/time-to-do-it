import { ToDoElement } from "../models/to-do-element.model";
import { ToDoExportFormat } from "../models/to-do-export-format";

const getActiveTODOs = (): ToDoExportFormat[] => {
    const savedToDoElementsJSON = localStorage.getItem("toDoElements");
    let savedToDoElements = savedToDoElementsJSON
        ? JSON.parse(savedToDoElementsJSON)
        : [];
    return savedToDoElements.map((element: ToDoElement) => {
        let updatedTime = element.time;
        if (element.isTimerRunning && element.lastTimerStart !== null) {
                const now = Date.now();
                updatedTime = element.time + (now - element.lastTimerStart);
            }
        return new ToDoExportFormat(
            element.id,
            element.name,
            element.description,
            updatedTime
        );
    });
};

const getArchivedTODOs = (): ToDoExportFormat[] => {
    const savedToDoElementsHistoryJSON = localStorage.getItem(
        "toDoElementsHistory"
    );
    let savedToDoElementsHistory = savedToDoElementsHistoryJSON ? JSON.parse(savedToDoElementsHistoryJSON) : [];
    return savedToDoElementsHistory.map((element: ToDoElement) => {
        return new ToDoExportFormat(
            element.id,
            element.name,
            element.description,
            element.time
        );
    });
};

export const exportToJSONFile = () => {
    const activeTODOs = getActiveTODOs();
    const archivedTODOs = getArchivedTODOs();
    const data = {
        data_version: "1.0",
        timestamp: new Date().toISOString(),
        activeTODOs: activeTODOs,
        archivedTODOs: archivedTODOs,
    };
    const json = JSON.stringify(data, null, 2);
    const filename = `TODOs_${new Date().toISOString().split("T")[0]}.json`;
    saveJSONasFile(json, filename);
};

const saveJSONasFile = (json: string, filename: string) => {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("download", filename);
    element.click();
    URL.revokeObjectURL(url);
    element.remove();
};

export const importFromJSONFile = async (): Promise<{
    activeTODOs: ToDoElement[];
    archivedTODOs: ToDoElement[];
}> => {
    return { activeTODOs: [], archivedTODOs: [] };
};
