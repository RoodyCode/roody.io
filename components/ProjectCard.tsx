import { BellRing, Check, Eye, Github, Play } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

type CardProps = {
  title: String
  description: String
}

export function ProjectCard({ ...props }: CardProps) {
  return (
    <Card className={cn('w-[380px]')}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      {/* <CardContent></CardContent> */}
      <CardFooter className="flex justify-center gap-1.5">
        <Button variant={'secondary'}>
          <Github className="mr-2 h-4 w-4" /> Source Code
        </Button>
        <Button disabled variant={'secondary'}>
          <Eye className="mr-2 h-4 w-4" /> Demo
        </Button>
      </CardFooter>
    </Card>
  )
}
