import * as Tabs from '@radix-ui/react-tabs'
import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { Select, Option } from '../Form/Select'
import {
  At,
  LinkSimple,
  ListBullets,
  ListNumbers,
  TextB,
  TextItalic,
} from '@phosphor-icons/react'
import { Textarea } from '../Form/Textarea'
import { Button } from '../Button'

export function TabContentDetails() {
  return (
    <Tabs.Content className="mt-6 flex flex-col outline-none" value="tab1">
      <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-400">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
            Personal info
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>
      <form
        id="settings"
        className="mt-5 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        action=""
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:items-center">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-6">
            <Input.Root>
              <Input.Control id="firstName" placeholder="First name" />
            </Input.Root>

            <label
              htmlFor="lastName"
              className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300"
            >
              Last name
            </label>
            <Input.Root>
              <Input.Control id="lastName" placeholder="Second name" />
            </Input.Root>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <At className="h-5 w-5 text-zinc-400" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              placeholder="example@email.com"
            />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
          <label
            htmlFor="photo"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
          <label
            htmlFor="role"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" type="text" placeholder="Your Role" />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Country
          </label>
          <Select placeholder="Select a Country...">
            <Option value="br" text="Brazil" />
            <Option value="eua" text="United States" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Timezone
          </label>
          <Select placeholder="Select a Timezone...">
            <Option value="br" text="South America Time (PST) UTC-10:00" />
            <Option value="eua" text="Pacific Standard Time (PST) UTC-08:00" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
          <label
            htmlFor="bio"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Select defaultValue="normal">
                <Option value="normal" text="Normal Text" />
              </Select>

              <div className="flex items-center gap-2">
                <Button variant="ghost">
                  <TextB weight="bold" className="h-4 w-4 text-zinc-500" />
                </Button>

                <Button variant="ghost">
                  <TextItalic weight="bold" className="h-4 w-4 text-zinc-500" />
                </Button>

                <Button variant="ghost">
                  <LinkSimple weight="bold" className="h-4 w-4 text-zinc-500" />
                </Button>

                <Button variant="ghost">
                  <ListBullets
                    weight="bold"
                    className="h-4 w-4 text-zinc-500"
                  />
                </Button>

                <Button variant="ghost">
                  <ListNumbers
                    weight="bold"
                    className="h-4 w-4 text-zinc-500"
                  />
                </Button>
              </div>
            </div>
            <Textarea id="bio" placeholder="Write your bio here :)" />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-4">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Tabs.Content>
  )
}
