import { formatBytes } from '@/utils/format-bytes'
import { Button } from '@/components/Button'
import { CheckCircle, File, SpinnerGap, Trash } from '@phosphor-icons/react'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 p-2',
    deleteButton: 'hover:text-red-600',
  },

  variants: {
    state: {
      progress: {
        container: 'border-zinc-600 dark:border-zinc-600',
        icon: 'border-emerald-100 bg-emerald-200 text-emerald-600 dark:text-emerald-400 dark:border-emerald-900/60 dark:bg-emerald-950/60',
      },
      complete: {
        container: 'border-emerald-500 dark:border-zinc-600',
        icon: 'border-emerald-100 bg-emerald-200 text-emerald-600  dark:text-emerald-400 dark:border-emerald-900/60 dark:bg-emerald-950/60',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-error-500/10 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:border-error-500/30 dark:bg-error-500/10 dark:text-error-200',
        deleteButton: 'invisible',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })
  return (
    <div className={container()}>
      <div className={icon()}>
        <File className="h-4 w-4" />
      </div>

      <div className="flex flex-1 items-start gap-1">
        {state === 'error' ? (
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-error-700 dark:text-error-600">
                Upload failed, please try again.
              </span>
              <span className="text-sm text-error-600 dark:text-error-400">
                {name}
              </span>
            </div>

            <button className="rounded-md bg-error-100 p-2 text-sm font-semibold text-error-600 dark:bg-error-400/50 dark:text-error-100 dark:hover:bg-error-400/60">
              Try again
            </button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {name}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {formatBytes(size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-emerald-900/40">
                <div
                  className="h-2 rounded-full bg-emerald-600"
                  style={{ width: state === 'complete' ? '100%' : '50%' }}
                />
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {state === 'complete' ? '100%' : '50%'}
              </span>
            </div>
          </div>
        )}

        {state === 'complete' ? (
          <CheckCircle
            weight="fill"
            className="h-5 w-5 text-emerald-600 dark:text-emerald-500"
          />
        ) : state === 'progress' ? (
          <SpinnerGap className="h-5 w-5 animate-spin text-emerald-600 dark:text-emerald-500" />
        ) : (
          <Button type="button" variant="ghost" className={deleteButton()}>
            <Trash className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
