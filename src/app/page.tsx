import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
