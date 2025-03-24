import { ChevronDownIcon } from 'lucide-react';

export default function DropdownSelect({ label, value, onChange, options }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">{label}</label>
            <div className="relative mt-1">
                <select
                    value={value}
                    onChange={onChange}
                    className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <ChevronDownIcon size={16} />
                </span>
            </div>
        </div>
    );
}
