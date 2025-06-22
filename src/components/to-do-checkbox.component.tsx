import { useState } from "react";

interface TODOCheckboxProps {
    onChange: (checked: boolean) => void;
    checked?: boolean;
}

export function ToDoCheckbox({
    onChange,
    checked: checkedAtBeginning,
}: TODOCheckboxProps) {
    const [checked, setChecked] = useState<boolean>(
        checkedAtBeginning || false
    );

    return (
        <input
            type="checkbox"
            className="
					w-6 h-6
					rounded-full
					border border-white/70
					bg-transparent
					appearance-none
					checked:bg-white/70
					checked:border-white
					flex items-center justify-center
					cursor-pointer
					transition-colors
				"
            value={checked ? "on" : "off"}
            onChange={() => {
                setChecked((p) => {
                    onChange(!p);
                    return !p;
                });
            }}
            checked={checkedAtBeginning}
        />
    );
}
