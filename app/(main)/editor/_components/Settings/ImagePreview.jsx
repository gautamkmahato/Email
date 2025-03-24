

export default function ImagePreview({ label, value, onChange }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">{label}</label>
            {/* Image Preview */}
            {value && (
                <img 
                    src={value} 
                    alt="Preview" 
                    className="w-full h-auto mb-2 rounded-lg border border-gray-200"
                />
            )}
        </div>
    );
}