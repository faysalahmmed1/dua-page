import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import SettingsPanel from '@/components/SettingsPanel';
import Header from '@/components/Shared/Header';
import Deshboard from '@/components/Deshboard'


export default function Home() {
  return (
    <div className='bg-white'>
      <Header/>
      
      <div className="flex h-screen bg-gray-500">
      <div >
        <Deshboard/>
      </div>
      <Sidebar />
     
      <div className="flex-1 flex flex-col overflow-hidden">
        <MainContent />
      </div>
      <SettingsPanel />
    </div>

    </div>
  );
}
