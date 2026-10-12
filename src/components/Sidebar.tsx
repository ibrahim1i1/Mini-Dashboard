import { NavLink } from "react-router-dom";
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

                    <NavLink
                        className={({ isActive }) =>
                            `w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                            }`
                        }
                        to='/'
                         >
                        <span>📦</span>
                        <span>Products</span>
                    </NavLink>

                    <NavLink
                        to='/analytics'
                        className={({ isActive }) => `w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${isActive
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/60'

                            }
                        `}
                        >
                        <span>📈</span>
                        <span>Analytics</span>
                    </NavLink>

                    <button
                    title="Coming Soon"
                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition opacity-60 cursor-not-allowed"
                        >
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