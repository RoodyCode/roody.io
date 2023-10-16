'use client'

import { useRouter } from 'next/navigation'
import { ContactForm } from '@/components/ContactForm'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useState } from 'react'

export default function Contact() {
  const router = useRouter()
  const [isOpen, setOpen] = useState(true)
  return (
    <Dialog open={isOpen} onOpenChange={state => router.back()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription>Please fill the form.</DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  )
}
