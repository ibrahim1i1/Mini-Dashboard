import { useEffect, useState } from 'react';
import ProductTable from '../components/ProductTable';
import type { Product, ProductsResponse } from '../types/Product';

export default function ProductsPage() {
  const [product, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');

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

  const processedProducts = product.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'low-to-high') return a.price - b.price;
    if (sortBy === 'high-to-low') return b.price - a.price;
    return 0;
  });

  const totalProducts = product.length;
  const totalCategories = categories.filter((c) => c !== 'all').length;

  const avgPrice = totalProducts > 0
  ? (product.reduce((acc, curr) => acc + curr.price, 0) / totalProducts).toFixed(2)
  : '0';

  const lowStockCount = product.filter((item) => (item.stock ?? 0) < 10).length;

  return (
    <div className='flex min-h-screen bg-slate-900 text-slate-100'>
      <div className='flex-1 flex flex-col min-w-0'>
        <main className='flex-1 p-4'>
          <div className='grid grid-cols-2'>
            <div className='bg-slate-950/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between'>
              <span className='text-xs font-medium text-slate-400 uppercase tracking-wider'>Total products</span>
              <div className='flex items-baseline justify-between mt-3'>
                <span className='text-2xl font-bold text-white'>{totalProducts}</span>
                <span className='text-xs text-blue-400 font-medium bg-blue-500/10 px-2 py-0.5 rounded-full'>Items</span>
              </div>
            </div>

            <div className='bg-slate-950/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between'>
              <span className='text-xs font-medium text-slate-400 uppercase tracking-wider'>Categories</span>
              <div className='flex items-baseline justify-between mt-3'>
                <span className='text-2xl font-bold text-white'>{totalCategories}</span>
                <span className='text-xs text-purple-400 font-medium bg-purple-500/10 px-2 py-0.5 rounded-full'>Active</span>
              </div>
            </div>

            <div className='bg-slate-950/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between'>
              <span className='text-xs font-medium text-slate-400 uppercase tracking-wider'>Avg Price</span>
              <div className='flex items-baseline justify-between mt-3'>
                <span className='text-2xl font-bold text-white'>{avgPrice}</span>
                <span className='text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full'>USD</span>
              </div>
            </div>

            <div className='bg-slate-950/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between'>
              <span className='text-xs font-medium text-slate-400 uppercase tracking-wider'>Low Stock</span>
              <div className='flex items-baseline justify-between mt-3'>
                <span className='text-2xl font-bold text-rose-400'>{lowStockCount}</span>
                <span className='text-xs text-rose-400 font-medium bg-rose-500/10 px-2 py-0.5 rounded-full'>&lt; 10 left</span>
              </div>
            </div>
          </div>
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
            <div className='flex gap-3 justify-center'>
              <div className='w-40'>
                <select
                  className='w-full bg-slate-950 border text-sm border-slate-800 rounded-xl px-4 py-2.5  text-slate-200 focus:outline-none focus:border-blue-500 transition cursor-pointer capitalize'
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className='w-40'>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className='w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition cursor-pointer'
                >
                  <option value="default">Default Order</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: high to Low</option>
                </select>
              </div>
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
          <ProductTable products={processedProducts} />
        </main>
      </div>

    </div>
  );
}