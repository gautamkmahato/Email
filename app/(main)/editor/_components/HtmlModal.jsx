import { Copy, X } from "lucide-react";
import { useRef } from "react";

export default function HtmlModal({ isOpen, onClose, title, children }) {
    const contentRef = useRef(null);

    if (!isOpen) return null;

    const handleCopy = () => {
        if (contentRef.current) {
            const range = document.createRange();
            range.selectNode(contentRef.current);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            
            // Optional: Show feedback that content was copied
            alert('Content copied to clipboard!');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-[450px] h-[450px] p-6 flex flex-col">
                {/* Dialog Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <div className="flex gap-3">
                        <button 
                            onClick={handleCopy}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            title="Copy content"
                        >
                            <Copy className="cursor-pointer hover:text-amber-300 w-5 h-5" />
                        </button>
                        <button 
                            onClick={onClose} 
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            title="Close"
                        >
                            <X className="cursor-pointer hover:text-amber-300 w-5 h-5" />
                        </button>
                    </div>
                </div>
                {/* Dialog Content (Scrollable Area) */}
                <div 
                    ref={contentRef}
                    className="flex-1 overflow-y-auto mb-4"
                >
                    <div className="bg-gray-100">
                        <code>
                            {children}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
}