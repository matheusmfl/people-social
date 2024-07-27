import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import asset from '../../public/assetHero.webp'
import Image from 'next/image'
import { Stats } from '@/components/Stats'
import { AboutUs } from '@/components/AboutUs'

export default function Home() {
  return (
    <main className="bg-black overflow-hidden min-h-screen">
      <Header />
      <Hero />

      <Image
        src={asset}
        alt="Asset"
        className="aspect-square -mt-[145px] z-10 relative mx-auto"
      />

      <div className="-mt-[82px]">
        <Stats />
      </div>

      <AboutUs />
    </main>
  )
}
