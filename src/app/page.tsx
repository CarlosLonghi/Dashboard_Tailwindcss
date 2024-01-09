export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen flex justify-center items-center flex-col gap-4">
      <h1 
        className="font-bold text-3xl md:text-5xl flex items-center gap-3 before:h-full before:w-0.5 before:bg-sky-500 before:flex">
        Título
      </h1>
      <h2 
        className="text-2xl md:text-4xl text-purple font-extralight">
        Subtítulo
      </h2>
      <p 
        className="text-1xl md:text-2xl font-thin text-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at perspiciatis voluptates? Consequatur neque, voluptas officiis inventore voluptates magnam porro!
      </p>

      <button 
        className="bg-sky-500 text-base md:text-xl font-medium px-4 py-2 mt-6 rounded-md enabled:hover:bg-sky-600 transition disabled:opacity-80 disabled:cursor-not-allowed"
      >
        Sign In
      </button>

      <div 
        className="bg-sky-600 w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32 xl:w-44 xl:h-44 2xl:w-60 2xl:h-60"
      >
      </div>
    </div>
  )
}
