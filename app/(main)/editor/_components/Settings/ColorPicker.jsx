export default function ColorPicker({ label, value, onChange }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="color"
                value={value}
                onChange={onChange}
                className="w-8 h-8"
            />
        </div>
    );
}
