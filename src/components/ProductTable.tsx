
import type { Product } from "../types/Product";

interface ProductTableProps {
    products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
    return (
        <section>
            <div className="md:hidden grid grid-cols-2 gap-3">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="border border-slate-500 bg-slate-950 rounded-xl p-2.5 relative flex flex-col justify-between"
                    >
                        <img src={item.thumbnail}
                            alt={item.title}
                            className="bg-slate-800 w-full mx-auto aspect-square object-cover rounded-xl"
                        />
                        <span className="absolute top-4 left-5 text-xs font-semibold px-2 py-1 bg-slate-950 rounded-full border border-slate-700">{item.category}</span>

                        <h2 className="text-left text-sm font-bold my-2 line-clamp-2">{item.title}</h2>

                        <div className="flex items-center justify-between border-t border-slate-800 py-2">
                            <span className="text-emerald-400 font-bold">{item.price} $</span>
                            <span
                                className={`text-[10px] font-semibold px-1.5 py-0.5 border rounded ${item.stock > 10
                                    ? 'text-blue-400 bg-blue-950/40'
                                    : 'text-amber-400 bg-amber-950/40'
                                    }`}
                            >
                                {item.stock} left
                            </span>
                        </div>

                        <button className="opacity-40 cursor-not-allowed w-full bg-slate-700 rounded-xl font-bold py-1.5 hover:bg-slate-500 active:scale-95 transition-all"
                            title="Coming Soon"
                        >
                            Edit
                        </button>
                    </div>
                ))}

            </div>

            <div className="overflow-x-auto hidden md:block rounded-2xl border border-slate-800/60 shadow-xl">
                <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-slate-800/60 text-xs uppercase tracking-wider ">
                        <tr>
                            <th className="px-6 py-4">Product</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4">Stock</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                        {products.map((item) => (
                            <tr key={item.id} className="bg-slate-800/60 transition">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <img
                                        className="w-10 h-10 rounded-lg object-cover bg-slate-800 border border-slate-700"
                                        src={item.thumbnail} alt={item.title}
                                    />
                                    <span className="font-medium text-white truncate max-w-[200px]">
                                        {item.title}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-2.5 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                        {item.category}
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-semibold text-emerald-400">
                                    {item.price}
                                </td>

                                <td className="px-6 py-4">
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${item.stock > 10 ? 'text-blue-400 bg-blue-950/40' : 'text-amber-400 bg-amber-950/40'}`}>
                                        {item.stock} left
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-right">
                                    <button className="opacity-40 cursor-not-allowed px-3 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                                    title="Coming Soon"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </section>
    );
}