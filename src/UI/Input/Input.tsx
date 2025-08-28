import React, { FC } from "react";
import "./Input.css";

interface IInput {
    name: string;
    label?: string;
    className?: string;
    value?: string | number | boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    as?: "input" | "select" | "checkbox";
    options?: string[]; // для select
    type?: string; // только для input (number, text и т.п.)
}

const Input: FC<IInput> = ({
                               name,
                               label,
                               className,
                               value,
                               onChange,
                               as = "input",
                               options = [],
                               type = "text",
                           }) => {
    return (
        <div className="input">
            {label && <label htmlFor={name} className="label">{label}</label>}

            {as === "select" ? (
                <select
                    id={name}
                    name={name}
                    value={value as string}
                    onChange={onChange}
                    className={className ?? ""}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option === "white" ? "Белые" : "Чёрные"}
                        </option>
                    ))}
                </select>
            ) : as === "checkbox" ? (
                <input
                    id={name}
                    name={name}
                    checked={value as boolean}
                    onChange={onChange}
                    type="checkbox"
                    className={className ?? ""}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    value={value as string | number}
                    onChange={onChange}
                    type={type}
                    className={className ?? ""}
                />
            )}
        </div>
    );
};

export default Input;
