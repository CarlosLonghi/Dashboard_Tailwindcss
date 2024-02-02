'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { TabItem } from './TabItem'
import { TabContent } from './TabContent'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List
        className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200"
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

      <TabContent
        value="tab1"
        title="Conteúdo tab 1"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi quaerat quidem ipsum eligendi id provident natus quisquam totam accusamus voluptates similique, necessitatibus suscipit nostrum nesciunt inventore harum laudantium voluptate fugiat odit sit et explicabo nam iste? Rem, neque beatae?"
      />
      <TabContent
        value="tab2"
        title="Conteúdo tab 2"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi quaerat quidem ipsum eligendi id provident natus quisquam totam accusamus voluptates similique, necessitatibus suscipit nostrum nesciunt inventore harum laudantium voluptate fugiat odit sit et explicabo nam iste? Rem, neque beatae? adipisicing elit. Mollitia sequi quaerat quidem ipsum eligendi id provident natus quisquam totam accusamus voluptates similique, necessitatibus suscipit nostrum nesciunt inventore harum laudantium voluptate fugiat odit sit et explicabo nam iste? Rem, neque beatae?"
      />
    </Tabs.Root>
  )
}
