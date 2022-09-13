import { useState } from 'react';
import { MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css';
import logo from './assets/images/logo.svg';

type GameType = {
  photo: string;
  name: string;
  adverts: number;
};

function App() {
  const [games] = useState<GameType[]>([
    {
      photo: 'images/game 1.png',
      name: 'League of Legends',
      adverts: 4,
    },
    {
      photo: 'images/game 2.png',
      name: 'Dota 2',
      adverts: 4,
    },
    {
      photo: 'images/game 3.png',
      name: 'Counter Strike',
      adverts: 4,
    },
    {
      photo: 'images/game 4.png',
      name: 'Apex Legends',
      adverts: 4,
    },
    {
      photo: 'images/game 5.png',
      name: 'Fortnite',
      adverts: 4,
    },
    {
      photo: 'images/game 6.png',
      name: 'World of Warcraft',
      adverts: 4,
    },
  ]);

  return (
    <main className="flex items-center flex-col my-20">
      <img src={logo} alt="Logo" className="w-40" />
      <h1 className="text-white text-6xl font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-clip-text bg-nlw-gradient">
          duo
        </span>{' '}
        está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={game.photo} alt={game.name} />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                {game.name}
              </strong>
              <span className="text-zinc-300 text-sm block">
                {game.adverts} anúncios
              </span>
            </div>
          </a>
        ))}
      </div>
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
          <button className="py-3 px-4 bg-violet-500 rounded text-white hover:bg-violet-600 flex gap-3 items-center">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
