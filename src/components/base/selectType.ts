import React from "react";

export interface ISelectProps {
    name: string;
    id?: string;
    className?: string;
    value?: string | number | readonly string[] | undefined;
    // eslint-disable-next-line no-unused-vars
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[]
}