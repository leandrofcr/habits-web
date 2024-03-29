import { Plus } from 'phosphor-react';

import logoImage from '../assets/logo.svg';

export function Header() {
  return (
    <header className="w-full max-w-3xl px-6 mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-cente gap-3 hover:border-violet-300"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </header>
  );
}
