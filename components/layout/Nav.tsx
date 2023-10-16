'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

interface NavProps {
  items: {
    href: string
    title: string
  }[]
}

export function Nav({ items }: NavProps) {
  const pathname = usePathname()
  return (
    <nav className="hidden sm:flex gap-1">
      {items.map(itm => (
        <Button
          variant={pathname == itm.href ? 'secondary' : 'ghost'}
          key={itm.title}
          asChild
        >
          <Link href={itm.href}>{itm.title}</Link>
        </Button>
      ))}
    </nav>
  )
}
