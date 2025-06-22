import { useEffect, useState } from "react";
import { Button } from "./button.component";
import { ToDoCheckbox } from "./to-do-checkbox.component";
import { ToDoDescription } from "./to-do-description.component";
import { ToDoName } from "./to-do-name.component";
import { formatTime } from "../utility/timer_utility_functions";

interface ToDoListElementProps {
    id: string;
    selected?: boolean;
    name: string;
    description: string;
    time: number;
    isTimerRunning: boolean;
    lastTimerStartTime: number | null;
    onRemove: () => void;
    onSelect: () => void;
    onCheck: () => void;
    onEditConfirmed: (title: string, description: string) => void;
    onTimerUpdate: (updatedTimer: {
        id: string;
        isRunning: boolean;
        startTime: number | null;
        elapsedTime: number;
    }) => void;
}

export function ToDoListElement({
    id,
    selected,
    name,
    description,
    time,
    isTimerRunning,
    lastTimerStartTime,
    onRemove,
    onSelect,
    onCheck,
    onEditConfirmed,
    onTimerUpdate,
}: ToDoListElementProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [nameState, setName] = useState(name);
    const [descriptionState, setDescription] = useState(description ?? "");
    const [displayTimeState, setDisplayTime] = useState(time ?? 0);

    useEffect(() => {
        if (!selected) {
            setIsEditing(false);
            setName(name);
            setDescription(description ?? "");
        }
    }, [selected, name, description]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;

        const update = () => {
            if (isTimerRunning && lastTimerStartTime != null) {
                const now = Date.now();
                setDisplayTime(time + (now - lastTimerStartTime));
            }
        };

        update();
        if (isTimerRunning) {
            interval = setInterval(update, 100);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isTimerRunning, lastTimerStartTime, time]);

    const handleStartTimer = () => {
        if (!isTimerRunning) {
            onTimerUpdate({
                id,
                isRunning: true,
                startTime: Date.now(),
                elapsedTime: time,
            });
        }
    };

    const handleStopTimer = () => {
        if (isTimerRunning && lastTimerStartTime != null) {
            onTimerUpdate({
                id,
                isRunning: false,
                startTime: null,
                elapsedTime: time + (Date.now() - lastTimerStartTime),
            });
        }
    };

    return (
        <div
            className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center mb-4"
            onClick={() => onSelect()}
        >
            <ToDoCheckbox onChange={() => {handleStopTimer(); onCheck();}} />

            <ToDoName
                name={nameState}
                selected={selected ?? false}
                editMode={isEditing}
                onChange={setName}
            />

            <div className="flex items-center gap-x-4 h-full w-3xs">
                <div className="text-sm grow text-center">
                    {formatTime(displayTimeState)}
                </div>

                {isTimerRunning ? (
                    <Button
                        className="h-full aspect-square"
                        label="⏸"
                        disabled={!isTimerRunning}
                        callback={handleStopTimer}
                    />
                ) : (
                    <Button
                        className="h-full aspect-square"
                        label="▶"
                        disabled={isTimerRunning}
                        callback={handleStartTimer}
                    />
                )}
                <Button
                    className="h-full aspect-square"
                    label="✖"
                    callback={() => onRemove()}
                />
            </div>

            {selected && (
                <>
                    <div />

                    <ToDoDescription
                        description={descriptionState}
                        editMode={isEditing}
                        onChange={setDescription}
                    />

                    <div className="flex gap-x-4">
                        {isEditing ? (
                            <Button
                                className="px-5 aspect-square"
                                label="✔"
                                callback={() => {
                                    setIsEditing(false);
                                    onEditConfirmed(
                                        nameState,
                                        descriptionState ?? ""
                                    );
                                }}
                            />
                        ) : (
                            <Button
                                className="px-5 aspect-square"
                                label="🖊"
                                callback={() => setIsEditing(true)}
                            />
                        )}

                        <Button
                            className="w-full h-full p-4"
                            label="Reset Timer"
                            callback={() => {
                                onTimerUpdate({
                                    id,
                                    isRunning: false,
                                    startTime: null,
                                    elapsedTime: 0,
                                });
                                setDisplayTime(0);
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
