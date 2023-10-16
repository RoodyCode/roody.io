'use client'

import { ModeToggle } from '../ModeToggle'
import { LangToggle } from '../LangToggle'
import { Nav } from './Nav'
import Link from 'next/link'
import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { MobileNav } from './MobileNav'
import { Button } from '../ui/button'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'Projects', href: '/projects' }
]

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <header className="container py-8 flex justify-between">
      <Link href="/" className="font-semibold">
        Roody
        <span className="text-primary">Code</span>
      </Link>
      <Nav items={navItems} />
      <div className="hidden md:flex gap-1.5">
        <LangToggle />
        <ModeToggle />
      </div>
      {showMobileMenu && <MobileNav items={navItems} />}
      <Button
        variant={'ghost'}
        className="md:hidden"
        size={'icon'}
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <XIcon /> : <MenuIcon />}
      </Button>
    </header>
  )
}
export default Header
