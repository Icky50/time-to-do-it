export class ToDoElement {
    id: string;
    name: string;
    description: string;
    time: number;
    isTimerRunning: boolean;
    lastTimerStart: number | null;

    constructor(id: string, name: string, description: string, time: number, isTimerRunning: boolean = false, lastTimerStart: number | null = null) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.time = time;
        this.isTimerRunning = isTimerRunning;
        this.lastTimerStart = lastTimerStart;
    }
}