'use client'

import * as React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const options = [
  {
    lang: 'German',
    code: 'de'
  },
  {
    lang: 'English',
    code: 'en'
  }
]

export function LangToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image
            className="rounded-[0.15rem]"
            width={20}
            height={20}
            src="/flags/en.svg"
            alt="en"
          />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map(opt => (
          <DropdownMenuItem key={opt.code} onClick={() => alert(opt.code)}>
            <Image
              className="rounded-[0.15rem] mr-2"
              width={20}
              height={20}
              src={`/flags/${opt.code}.svg`}
              alt={opt.code}
            />
            {opt.lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
