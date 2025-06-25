// data_version 1.0
export class ToDoExportFormat {
    id: string;
    name: string;
    description: string;
    time: number;

    constructor(id: string, name: string, description: string, time: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.time = time;
    }
}
