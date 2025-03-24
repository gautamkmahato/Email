
export default function InputBox({ label, value, onChange }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="block w-full px-4 py-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
    );
}
