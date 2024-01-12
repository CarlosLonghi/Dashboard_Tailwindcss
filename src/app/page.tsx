export default function Home() {
  return (
    <main className="h-screen bg-slate-100 p-8 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="m-auto flex h-full max-w-app flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold md:text-5xl">Título</h1>
        <h2 className="text-2xl font-extralight text-purple md:text-4xl">
          Subtítulo
        </h2>
        <p className="text-1xl text-center font-thin md:text-2xl dark:text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at
          perspiciatis voluptates? Consequatur neque, voluptas officiis
          inventore voluptates magnam porro!
        </p>

        <button className="mt-6 rounded-md bg-sky-600 px-4 py-2 text-base font-medium text-slate-100 transition enabled:hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-80 md:text-xl dark:bg-sky-200 dark:text-sky-950 dark:enabled:hover:bg-sky-400">
          Sign In
        </button>

        <div className="h-10 w-10 bg-slate-900 sm:h-20 sm:w-20 md:h-32 md:w-32 xl:h-44 xl:w-44 2xl:h-60 2xl:w-60 dark:bg-slate-400"></div>
      </div>
    </main>
  )
}
