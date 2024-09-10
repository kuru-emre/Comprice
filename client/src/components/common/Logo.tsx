import { Link } from '@/i18n/routing';

export default function Logo() {
  return (
    <Link href="/" className="group p-2">
      <p className="text-main text-center font-lastica text-xs font-bold tracking-widest lg:text-sm">Comprice</p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center">
          <p className="bg-opposite text-opposite rounded-full px-2 py-1 align-middle font-lastica text-[9px] font-bold tracking-widest lg:text-[11px]">
            World
          </p>
        </div>
      </div>
    </Link>
  );
}
