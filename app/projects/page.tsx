import { ProjectCard } from '@/components/ProjectCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Here, you'll find a showcase of my most exciting projects."
}

export default function Projects() {
  return (
    <div className="container max-w-4xl">
      <h1 className="scroll-m-20 text-4xl font-bold dark:font-extrabold tracking-tight lg:text-4xl">
        My Projects
      </h1>
      <p className="mb-10 leading-7 [&:not(:first-child)]:mt-6">
        Here, you&apos;ll find a showcase of my most exciting projects.
      </p>

      <div className="flex gap-3 flex-row flex-wrap">
        <ProjectCard
          description="Simple web interface for managing Go-eCharger"
          title="go-e Charger Web App"
        />
      </div>
    </div>
  )
}
