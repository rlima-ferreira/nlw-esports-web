import { Trigger } from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

export default function BarRegister() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between">
        <div>
          <strong className="text-white font-black text-2xl block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Trigger className="py-3 px-4 bg-violet-500 rounded text-white hover:bg-violet-600 flex gap-3 items-center">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Trigger>
      </div>
    </div>
  );
}
