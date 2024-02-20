import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className={twMerge(
        'max-h-[500px] min-h-32 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none',
        'focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/15',
      )}
      {...props}
    />
  )
}
