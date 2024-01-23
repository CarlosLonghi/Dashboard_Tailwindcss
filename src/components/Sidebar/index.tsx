'use client'
import { Logo } from './Logo'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <MagnifyingGlass className="h-5 w-5 fill-zinc-400" />
        <input
          type="text"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-400 outline-none"
          placeholder="Buscar"
        />
      </div>
    </aside>
  )
}
