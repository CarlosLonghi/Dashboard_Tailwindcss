import * as Select from '@radix-ui/react-select'
import { Check } from '@phosphor-icons/react'

export type OptionProps = Select.SelectItemProps & {
  text: string
}

export function Option({ text, ...props }: OptionProps) {
  return (
    <Select.Item
      className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-200"
      {...props}
    >
      <Select.ItemText>{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check weight="bold" className="h-4 w-4 text-emerald-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
