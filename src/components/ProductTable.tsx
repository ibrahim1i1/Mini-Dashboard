import type { Product } from "../types/Product";

interface ProductTableProps {
    products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-slate-800/60 shadow-xl">
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
                                <button className="px-3 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}