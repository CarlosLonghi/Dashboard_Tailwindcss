import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="max-h-[500px] min-h-32 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50"
      {...props}
    />
  )
}