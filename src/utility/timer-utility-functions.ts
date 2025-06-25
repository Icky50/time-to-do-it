export const formatTime = (timeInMS: number): string => {
    const hours = Math.floor(timeInMS / 3600000);
    const minutes = Math.floor((timeInMS % 3600000) / 60000);
    const seconds = Math.floor((timeInMS % 60000) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
