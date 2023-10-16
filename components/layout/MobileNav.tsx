'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LangToggle } from '../LangToggle'
import { ModeToggle } from '../ModeToggle'

interface NavProps {
  items: {
    href: string
    title: string
  }[]
}

export function MobileNav({ items }: NavProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline'
              )}
            >
              {item.title}
            </Link>
          ))}
          <div className="absolute bottom-2 right-2 flex gap-1.5 justify-self-end">
            <LangToggle />
            <ModeToggle />
          </div>
        </nav>
      </div>
    </div>
  )
}
