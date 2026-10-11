export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900/70 border-r border-slate-800 p-6 flex flex-col justify-between hidden md:flex">
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
                        📊
                    </div>
                    <span className="text-xl tracking-wide font-bold text-white">
                        MINI <span className="text-blue-500">DASH</span>
                    </span>
                </div>
                <nav className="space-y-2">
                    <button className="w-full bg-blue-600 flex items-center gap-3 px-4 py-2 rounded-xl text-white font-medium shadow-md shadow-blue-600/20 transition cursor-pointer hover:bg-blue-600/50">
                        <span>📦</span>
                        <span>Products</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition">
                        <span>📈</span>
                        <span>Analytics</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/60 hover:text-white transition">
                        <span>⚙️</span>
                        <span>Settings</span>
                    </button>
                </nav>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
                <span>Verison 1.0.0</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

        </aside>
    );
}