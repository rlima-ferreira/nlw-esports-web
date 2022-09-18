import { Root } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { gameApi, IGame } from './api/game.api';
import logo from './assets/images/logo.svg';
import BarRegister from './components/BarRegister';
import CreateAdModal from './components/CreateAdModal';
import GameCard from './components/GameCard';
import './styles/main.css';

function App() {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    gameApi.findAll().then(({ data }) => setGames(JSON.parse(data)));
  }, []);

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
          <GameCard
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>
      <Root>
        <CreateAdModal />
        <BarRegister />
      </Root>
    </main>
  );
}

export default App;
