import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductTable from './components/ProductTable';
import type { Product, ProductsResponse } from './types/product';

export default function App() {
  const [product, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
  console.log(product)

  return (
    <div className='flex min-h-screen bg-slate-900 text-slate-100'>

      <Sidebar />
      
      <div className='flex-1 flex flex-col min-w-0'>
        <Navbar />
        
        <main className='flex-1 p-8'>
          {loading && (
            <div className='flex flex-col items-center justify-center gap-3 p-12'>
              <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
              <span className="text-sm text-slate-400">Loading products...</span>
            </div>
          )}

          {error&& (
            <div className='p-4 bg-rose-500/20 rounded-xl border border-rose-500/30 text-rose-400 my-15 text-center'>
              {error}
            </div>
          )}
          <ProductTable products={product} />
        </main>
      </div>

    </div>
  );
}