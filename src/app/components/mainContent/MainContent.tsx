'use client' // somente no componente que usar o useEffect

import TopBar from "./topBar/TopBar";
import TopContent from "./topContent/TopContent";
import BottomContent from "./bottomContent/bottomContent";


export default function MainContent() {
  return (
  <div className="flex-1 p-6 mb-14 overflow-auto bg-gradient-to-t from-zinc-900 to-green-900">
    <TopBar />
    <TopContent />
    <BottomContent />
  </div>
  )
}