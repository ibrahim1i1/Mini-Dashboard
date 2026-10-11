export default function Navbar() {
  return (
    <header className="h-16 bg-slate-900/50 backdrop-blur border-b border-slate-800 px-6 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-white">Products Management</h1>
        <p className="text-xs text-slate-800">Manage your store inventory and items</p>
      </div>

      <div className="flex items-center gap-4">
        <button title="Notifications" className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-800 transition">
          🔔
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
          <div className="w-9 h-6 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
            A
          </div>
          <div className="hidden sm:block text-left">
            <span className="block text-sm font-medium text-white leading-tight">Admin User</span>
            <span className="block text-xs text-slate-800">admin@example.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}