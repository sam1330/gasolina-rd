import React from "react";

export interface IInputGroupProps {
    label?: string;
    inputComponent?: React.ReactNode;
    labelComponent?: React.ReactNode;
    htmlFor?: string;
    value?: string | number | undefined | readonly string[];
    // eslint-disable-next-line no-unused-vars
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    name: string;
    type: string;
    placeholder?: string;
    required?: boolean;
}