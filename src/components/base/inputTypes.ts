import React from "react";

export interface IInputProps {
    type: string;
    name: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    value?: string | number | undefined | readonly string[];
    // eslint-disable-next-line no-unused-vars
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}