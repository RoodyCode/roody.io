import { Hero } from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <div className="grow flex items-center justify-center">
      <Hero />
    </div>
  )
}
