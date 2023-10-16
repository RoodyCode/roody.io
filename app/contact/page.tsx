import { ContactForm } from '@/components/ContactForm'
import { Fragment } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact'
}

export default function Contact() {
  return (
    <Fragment>
      <div className="mt-10 mx-auto w-full sm:min-w-[25vw] sm:max-w-[500px]">
        <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          Contact
        </h1>
        <p className="mb-10 text-xl text-muted-foreground">Feel free to contact me.</p>
        <ContactForm />
      </div>
    </Fragment>
  )
}
