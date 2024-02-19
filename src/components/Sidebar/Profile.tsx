import { SignOut } from '@phosphor-icons/react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/CarlosLonghi.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
          Carlos Longhi
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          carloslonghi.cl@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <SignOut
          weight="duotone"
          className="h-5 w-5 group-hover:text-red-700 dark:group-hover:text-red-600"
        />
      </Button>
    </div>
  )
}
