import HomeSection from "./components/HomeSection"
import RrethNesh from "./components/RrethNesh"
import Makinat from "./components/Makinat"
import Kontakt from "./components/Kontakt"


export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <HomeSection />
      <RrethNesh />
      <Makinat />
      <Kontakt />
    </main>
  )
}
