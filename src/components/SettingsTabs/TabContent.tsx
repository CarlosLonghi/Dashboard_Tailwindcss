'use client'

import * as Tabs from '@radix-ui/react-tabs'

export interface TabContentProps {
  value: string
  title: string
  text: string
}

export function TabContent({ value, title, text }: TabContentProps) {
  return (
    <Tabs.Content
      className="relative mt-4 px-1 pb-2 text-sm font-medium text-zinc-700"
      value={value}
    >
      <h2>{title}</h2>

      <div className="mt-2">
        <p>{text}</p>
      </div>
    </Tabs.Content>
  )
}
