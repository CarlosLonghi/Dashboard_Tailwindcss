export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-emerald-50 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-emerald-700 dark:text-zinc-200">
          Used space
        </span>
        <p className="text-sm/5 text-emerald-600 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-emerald-100 dark:bg-emerald-200">
        <div className="h-2 w-4/5 rounded-full bg-emerald-600" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-emerald-500 transition hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-600"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="rounded bg-emerald-100 p-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-200 hover:text-emerald-800 dark:bg-emerald-900/40 dark:text-zinc-300 dark:hover:bg-emerald-900 dark:hover:text-zinc-200"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
