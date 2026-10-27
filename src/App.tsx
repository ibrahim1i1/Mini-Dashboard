import AnalyticsPage from './pages/AnalyticsPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductsPage from './pages/ProductsPage';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className='flex min-h-screen bg-slate-900 text-slate-100'>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className='flex-1 flex flex-col min-w-0'>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/analytics' element={<AnalyticsPage />}/>
            <Route path="*" element={<div className="p-8 text-center text-slate-400">404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}