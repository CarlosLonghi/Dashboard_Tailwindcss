import { ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CaretDown } from '@phosphor-icons/react'
import { Option } from './Option'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder?: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.SelectTrigger className="flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-400">
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <CaretDown className="h-4 w-4 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.SelectTrigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={4}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-sm"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

export { Option }
