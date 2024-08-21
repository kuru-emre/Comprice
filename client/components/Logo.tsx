export default function Logo() {
  return (
    <div className="group p-2">
      <p className="text-center font-lastica font-bold tracking-widest text-white transition-all duration-300 group-hover:text-violet-400 sm:text-xs lg:text-base">Comprice</p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="rounded-full bg-white px-3 py-1 font-lastica text-xs font-bold tracking-widest text-gray-900 transition-all duration-300 group-hover:text-violet-400">
            World
          </span>
        </div>
      </div>
    </div>
  );
}
