'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Github, Mail } from 'lucide-react'

export function Hero() {
  return (
    <motion.div
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mt-[-20vh] sm:text-left text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Hi, I&apos;m <span className="text-primary">Roody</span>
        </h1>
        <p className="sm:max-w-[75%] text-lg leading-7 [&:not(:first-child)]:mt-6">
          I am a software engineer based in Germany, passionate about creating innovative
          solutions.
        </p>
        <div className="flex gap-2 mt-6 sm:justify-start justify-center">
          <Button variant={'secondary'} asChild>
            <Link target="_blank" href="https://github.com/RoodyCode">
              <Github className="mr-2" size={20} />
              GitHub
            </Link>
          </Button>
          <Button asChild>
            <Link href="/contact">
              <Mail className="mr-2" size={20} />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
