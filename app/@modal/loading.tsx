import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm w-[100vw] h-[100vh] absolute flex justify-center items-center flex-col gap-6">
      <Loader2 className="animate-spin" />
    </div>
  )
}
