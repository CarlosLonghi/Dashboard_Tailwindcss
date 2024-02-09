'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { At } from '@phosphor-icons/react'

export function TabContentDetails() {
  return (
    <Tabs.Content className="mt-6 flex flex-col overflow-y-auto" value="tab1">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <button
            className="rounded-lg border border-zinc-300 px-4 py-2 font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50"
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded-lg border border-zinc-300 bg-emerald-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm transition hover:bg-emerald-700"
            type="submit"
            form="settings"
          >
            Save
          </button>
        </div>
      </div>
      <form
        id="settings"
        className="mt-5 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        action=""
      >
        <div className="grid grid-cols-form items-center gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control placeholder="First name" />
            </Input.Root>
            <Input.Root>
              <Input.Control placeholder="Second name" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form items-center gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
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

        <div className="grid grid-cols-form items-center gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid grid-cols-form items-center gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" type="text" placeholder="Your Role" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form items-center gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <div>Input select</div>
        </div>

        <div className="grid grid-cols-form items-center gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <div>Input select</div>
        </div>

        <div className="grid grid-cols-form items-center gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div>Inputs bio</div>
        </div>

        <div className="grid grid-cols-form items-center gap-3 pt-5">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
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
          <button
            className="rounded-lg border border-zinc-300 px-4 py-2 font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50"
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded-lg border border-zinc-300 bg-emerald-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm transition hover:bg-emerald-700"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </Tabs.Content>
  )
}
