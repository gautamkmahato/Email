export default function Slider({ label, value, onChange, min = 0, max = 100 }) {
    // Ensure value is a number before adding px
    const valueWithUnit = value ? `${value}px` : "0px";

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="mt-1 text-sm text-gray-500">Value: {valueWithUnit}</div>
        </div>
    );
}
