'use client'

import { File, Trash } from '@phosphor-icons/react'
import { useFileInput } from './Root'
import { formatBytes } from '@/utils/format-bytes'

export function FileList() {
  const { files } = useFileInput()
  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-emerald-100 bg-emerald-200 p-2 text-emerald-600">
              <File className="h-4 w-4" />
            </div>

            <div className="flex flex-1 items-start gap-1">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-700">
                    {file.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {formatBytes(file.size)}
                  </span>
                </div>

                <div className="flex w-full items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-zinc-100">
                    <hr className="h-2 w-1/2 rounded-full bg-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-zinc-700">50%</span>
                </div>
              </div>

              <button className="">
                <Trash className="h-5 w-5 text-zinc-500 transition hover:text-red-800" />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
