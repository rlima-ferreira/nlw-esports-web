import {
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Title,
} from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import logo from './assets/images/logo.svg';
import BarRegister from './components/BarRegister';
import Input from './components/form/Input';
import GameCard from './components/GameCard';
import './styles/main.css';

interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<IGame[]>([]);
  const [form, setForm] = useState({
    game: '',
    name: '',
    yearsPlaying: 0,
    discord: '',
    useVoiceChannel: false,
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/games')
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  function handleChangeValue(ev: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = ev.target;
    setForm({ ...form, [name]: type != 'check' ? value : checked });
  }

  async function searchDuo(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
  }

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
        <Portal>
          <Overlay className="bg-black/60 inset-0 fixed" />
          <Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Title className="text-3xl font-black">Publique seu anúncio</Title>
            <form
              method="post"
              onSubmit={searchDuo}
              className="mt-8 flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  id="game"
                  name="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                  value={form.game}
                  onChange={handleChangeValue}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                  value={form.name}
                  onChange={handleChangeValue}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input
                    id="yearsPlaying"
                    name="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser ZERO"
                    value={form.yearsPlaying}
                    onChange={handleChangeValue}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input
                    id="discord"
                    name="discord"
                    type="text"
                    placeholder="Usuario #8888"
                    value={form.discord}
                    onChange={handleChangeValue}
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className="flex gap-1">
                    <button title="Domingo">D</button>
                    <button title="Segunda">S</button>
                    <button title="Terça">T</button>
                    <button title="Quarta">Q</button>
                    <button title="Quinta">Q</button>
                    <button title="Sexta">S</button>
                    <button title="Sábado">S</button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      id="hourStart"
                      name="hourStart"
                      type="time"
                      placeholder="De"
                    />
                    <Input
                      id="hourEnd"
                      name="hourEnd"
                      type="time"
                      placeholder="Até"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 text-sm">
                <Input
                  type="checkbox"
                  name="useVoiceChannel"
                  checked={form.useVoiceChannel}
                  onChange={handleChangeValue}
                />
                Costumo me conectar ao chat de voz
              </div>
              <footer className="mt-4 flex justify-end gap-4">
                <Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                  Cancelar
                </Close>
                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Content>
        </Portal>
        <BarRegister />
      </Root>
    </main>
  );
}

export default App;
