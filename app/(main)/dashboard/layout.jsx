import Sidebar from "./_components/Sidebar";

// app/layout.jsx
export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {/* Topbar */}
        <div className="border-b border-gray-50 shadow-sm py-4 px-4 mb-4">
          <h1 className="text-xl font-semibold text-gray-800">Topbar</h1>
        </div>

        {/* Main Content */}
        <div className="p-6">
            {children}
        </div>
      </div>
    </div>
  );
}
