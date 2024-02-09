import * as SelectPrimitive from '@radix-ui/react-select'
import { CaretDown, Check } from '@phosphor-icons/react'

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.SelectTrigger className="flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-400">
        <SelectPrimitive.Value placeholder="Select a Country..." />
        <SelectPrimitive.Icon>
          <CaretDown className="h-4 w-4 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.SelectTrigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={4}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50"
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item
              value="br"
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-200"
            >
              <SelectPrimitive.ItemText>Brasil</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check weight="bold" className="h-4 w-4 text-emerald-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="eua"
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-200"
            >
              <SelectPrimitive.ItemText>United States</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check weight="bold" className="h-4 w-4 text-emerald-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
