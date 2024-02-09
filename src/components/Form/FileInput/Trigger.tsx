'use client'

import { CloudArrowUp } from '@phosphor-icons/react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()
  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-emerald-200 hover:bg-emerald-25 hover:text-emerald-600"
    >
      <div className="rounded-full border-6 border-zinc-100 bg-zinc-200 p-2 transition group-hover:border-emerald-50 group-hover:bg-emerald-100">
        <CloudArrowUp className="h-5 w-5 text-zinc-600 transition group-hover:text-emerald-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-emerald-700">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
