import React, { ChangeEvent } from 'react';

interface NewCarInputProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NewCarInput: React.FC<NewCarInputProps> = ({
    id,
    type,
    label,
    placeholder,
    name,
    required,
    onChange,
}) => {
    return (
        <div>
            <label htmlFor={id} type={type} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                name={name}
                required={required}
                onChange={onChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    );
};

export default NewCarInput;