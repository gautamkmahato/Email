export default function ColorPicker({ label, value, onChange }) {
    return (
        <div className="">
            <label className="block text-sm font-semibold text-gray-700">{label}</label>
            <input
                type="color"
                value={value}
                onChange={onChange}
                className="w-12 h-8"
            />
        </div>
    );
}
