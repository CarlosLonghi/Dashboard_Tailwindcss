import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg border-zinc-300 px-4 py-2 font-semibold shadow-sm transition outline-none',
    'focus-visible:ring-2 focus-visible:ring-emerald-400 dark:focus-visible:ring-emerald-500',
    'active:opacity-90',
  ],
  variants: {
    variant: {
      primary: 'bg-emerald-600 text-zinc-50 hover:bg-emerald-700',
      ghost:
        'group rounded p-1.5 hover:bg-zinc-100 shadow-none text-zinc-500 dark:hover:bg-zinc-50/5 dark:text-zinc-200',
      outline:
        'group border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 dark:text-zinc-200',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
