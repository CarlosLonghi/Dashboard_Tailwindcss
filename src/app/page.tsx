export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen flex justify-center items-center flex-col gap-4">
      <h1 
        className="font-bold text-5xl flex items-center gap-3 before:h-full before:w-0.5 before:bg-sky-500 before:flex">
        Título
      </h1>
      <h2 
        className="text-4xl text-purple font-extralight">
        Subtítulo
      </h2>
      <p 
        className="text-2xl font-thin text-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at perspiciatis voluptates? Consequatur neque, voluptas officiis inventore voluptates magnam porro!
      </p>

      <button 
        className="bg-sky-500 text-xl font-medium px-4 py-2 mt-6 rounded-md enabled:hover:bg-sky-600 transition disabled:opacity-80 disabled:cursor-not-allowed"
      >
        Sign In
      </button>
    </div>
  )
}
