'use client'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { TabContentDetails } from './TabContentDetails'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="auto">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List
            className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-600"
            aria-label="Settings"
          >
            <TabItem value="tab1" title="My Details" />
            <TabItem value="tab2" title="Profile" />
            <TabItem value="tab3" title="Password" />
            <TabItem value="tab4" title="Team" />
            <TabItem value="tab5" title="Plan" />
            <TabItem value="tab6" title="Billing" />
            <TabItem value="tab7" title="Email" />
            <TabItem value="tab8" title="Notifications" />
            <TabItem value="tab9" title="Integrations" />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-1 translate-y-2 touch-none select-none bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="cursor-pointer rounded-lg bg-zinc-300 active:cursor-grabbing" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <TabContentDetails />
    </Tabs.Root>
  )
}
