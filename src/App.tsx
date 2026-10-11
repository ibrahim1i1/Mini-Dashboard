
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className='flex min-h-screen bg-slate-900 text-slate-100'>

      <Sidebar />

      <div className='flex-1 flex flex-col min-w-0'>
        <Navbar />
      </div>

    </div>
  );
}