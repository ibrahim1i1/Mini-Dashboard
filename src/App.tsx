import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductTable from './components/ProductTable';
import type { Product, ProductsResponse } from './types/product';

export default function App() {
  const [product, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server.')
        }

        const data: ProductsResponse = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.')
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const categories = ['all', ...Array.from(new Set(product.map((p) => p.category)))];

  const filteredProducts = product.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className='flex min-h-screen bg-slate-900 text-slate-100'>

      <Sidebar />

      <div className='flex-1 flex flex-col min-w-0'>
        <Navbar />

        <main className='flex-1 p-8'>
          <div className='flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-slate-900/60 p-4 rounded-2xl border border-slate-800 mb-2'>
            <div className='relative flex-1'>
              <span className='absolute inset-y-0 left-3 flex items-center text-slate-400'>
                🔍
              </span>
              <input type="text"
                placeholder='Search products by name...'
                className='w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className='sm:w-56'>
              <select
              className='w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition cursor-pointer capitalize'
              value={selectedCategory}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {loading && (
            <div className='flex flex-col items-center justify-center gap-3 p-12'>
              <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
              <span className="text-sm text-slate-400">Loading products...</span>
            </div>
          )}

          {error && (
            <div className='p-4 bg-rose-500/20 rounded-xl border border-rose-500/30 text-rose-400 my-15 text-center'>
              {error}
            </div>
          )}
          <ProductTable products={filteredProducts} />
        </main>
      </div>

    </div>
  );
}