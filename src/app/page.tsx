export default function Home() {
  return (
    <main className="p-8 bg-slate-100 text-slate-900 dark:text-slate-100 dark:bg-slate-900 h-screen">
      <div className="max-w-app flex flex-col justify-center items-center gap-4 h-full m-auto">
        <h1 
          className="font-bold text-3xl md:text-5xl">
          Título
        </h1>
        <h2 
          className="text-2xl md:text-4xl text-purple font-extralight">
          Subtítulo
        </h2>
        <p 
          className="text-1xl dark:text-slate-400 md:text-2xl font-thin text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at perspiciatis voluptates? Consequatur neque, voluptas officiis inventore voluptates magnam porro!
        </p>

        <button 
          className="bg-sky-600 dark:bg-sky-200 dark:text-sky-950 text-slate-100 text-base md:text-xl font-medium px-4 py-2 mt-6 rounded-md enabled:hover:bg-sky-800 dark:enabled:hover:bg-sky-400 transition disabled:opacity-80 disabled:cursor-not-allowed"
        >
          Sign In
        </button>

        <div 
          className="bg-slate-900 dark:bg-slate-400 w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32 xl:w-44 xl:h-44 2xl:w-60 2xl:h-60"
        >
        </div>
      </div>
    </main>
  )
}
