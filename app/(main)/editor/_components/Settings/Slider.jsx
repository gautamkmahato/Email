export default function Slider({ label, value, onChange, min = 0, max = 100 }) {
    // Ensure value is a number before adding %
    const numericValue = typeof value === 'number' ? value : 0;
    const valueWithUnit = `${numericValue}%`; // Display as percentage

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
                <span className="font-semibold">{label}: </span>
                <span className="text-sm text-gray-500">{valueWithUnit}</span>
            </label>
            <input
                type="range"
                min={min}
                max={max}
                value={numericValue}
                onChange={(e) => {
                    const newValue = parseFloat(e.target.value); // Ensure the value is a number
                    if (!isNaN(newValue)) {
                        onChange(newValue); // Emit the numeric value
                    }
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    );
}