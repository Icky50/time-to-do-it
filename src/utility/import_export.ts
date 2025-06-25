import type { ToDoElement } from "../models/to-do-element.model";

export const exportToJSONFile = (activeTODOs: ToDoElement[], archivedTODOs: ToDoElement[]) => {
    const data = {
        data_version: "1.0",
        timestamp: new Date().toISOString(),
        activeTODOs: activeTODOs,
        archivedTODOs: archivedTODOs
    }
    const json = JSON.stringify(data, null, 2);
    const filename = `TODOs_${new Date().toISOString().split("T")[0]}.json`;
    saveJSONasFile(json, filename);
}

const saveJSONasFile = (json: string, filename: string) => {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("download", filename);
    element.click();
    URL.revokeObjectURL(url);
    element.remove();
}

export const importFromJSONFile = async (): Promise<{activeTODOs: ToDoElement[], archivedTODOs: ToDoElement[]}> => {return { activeTODOs: [], archivedTODOs: [] };}