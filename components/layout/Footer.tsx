import { Heart } from 'lucide-react'
import Link from 'next/link'

const Footer = () => (
  <footer className="container min-h-[6vh]">
    <p className="flex gap-2">
      Made with <Heart size={20} color="red" /> by Roody
    </p>
  </footer>
)

export default Footer
