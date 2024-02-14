import { formatBytes } from '@/utils/format-bytes'
import { Button } from '@/components/Button'
import { CheckCircle, File, Trash } from '@phosphor-icons/react'

export interface FileItemProps {
  name: string
  size: number
}

export function FileItem({ name, size }: FileItemProps) {
  const state = 'error' as 'complete' | 'progress' | 'error'

  return (
    <div className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4">
      <div className="rounded-full border-4 border-emerald-100 bg-emerald-200 p-2 text-emerald-600">
        <File className="h-4 w-4" />
      </div>

      <div className="flex flex-1 items-start gap-1">
        {state === 'error' ? (
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-error-700 text-sm font-medium">
                Upload failed, please try again.
              </span>
              <span className="text-error-600 text-sm">{name}</span>
            </div>

            <button className="text-error-600 text-sm font-semibold">
              Try again
            </button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">{name}</span>
              <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <hr
                  className="h-2 rounded-full bg-emerald-600"
                  style={{ width: state === 'complete' ? '100%' : '50%' }}
                />
              </div>
              <span className="text-sm font-medium text-zinc-700">
                {state === 'complete' ? '100%' : '50%'}
              </span>
            </div>
          </div>
        )}

        {state === 'complete' ? (
          <CheckCircle weight="fill" className="h-5 w-5 text-emerald-600" />
        ) : (
          <Button variant="ghost">
            <Trash className="h-5 w-5 text-zinc-500 transition group-hover:text-red-600" />
          </Button>
        )}
      </div>
    </div>
  )
}
