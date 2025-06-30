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

const parseAndValidateJSON = (jsonString: string) => {
    let parsedData: any;

    try {
        parsedData = JSON.parse(jsonString);
    } catch (error) {
        throw new Error("Invalid JSON format");
    }

    switch (parsedData.data_version) {
        case "1.0":
            if (!Array.isArray(parsedData.activeTODOs) ||
                !Array.isArray(parsedData.archivedTODOs)) {
                throw new Error("Invalid data structure");
            }
            break;
        default:
            throw new Error("Unsupported data version");
    }

    const activeTODOs = parsedData.activeTODOs.map((item: any) => {
        return new ToDoElement(
            item.id,
            item.name,
            item.description,
            item.time,
            false,
            null
        );
    });

    const archivedTODOs = parsedData.archivedTODOs.map((item: any) => {
        return new ToDoElement(
            item.id,
            item.name,
            item.description,
            item.time,
            false,
            null
        );
    });

    return { activeTODOs, archivedTODOs };
}

const loadJSONFromFile = async(): Promise<string> => {
    return new Promise((resolve, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";

        input.onchange = () => {
            const file = input.files?.[0];
            if (!file) {
                resolve("");
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result as string);
            }
            reader.onerror = () => {
                reject(new Error("Error reading file"));
            }
            reader.readAsText(file);
            input.remove();
        }
        input.click();
    })
}

export const importFromJSONFile = async (): Promise<{
    activeTODOs: ToDoElement[];
    archivedTODOs: ToDoElement[];
}> => {
    const jsonString = await loadJSONFromFile();
    if (!jsonString) {
        return { activeTODOs: [], archivedTODOs: [] };
    }
    return parseAndValidateJSON(jsonString);
};

export const mergeTODOs = (
    oldTODOs: ToDoElement[],
    newTODOs: ToDoElement[]
): ToDoElement[] => {
    const mergedTODOs = [...oldTODOs];
    const existingIds = new Set(oldTODOs.map(todo => todo.id));
    for (const todo of newTODOs) {
        if (!existingIds.has(todo.id)) {
            mergedTODOs.push(todo);
        } else {
            const index = mergedTODOs.findIndex(t => t.id === todo.id);
            if (index !== -1) {
                mergedTODOs[index] = todo;
            }
        }
    }
    return mergedTODOs;
};