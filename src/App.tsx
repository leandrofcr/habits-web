import { Header } from './components/Header';
import { Plus } from 'phosphor-react';
import { SummaryTable } from './components/SummaryTable';

import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex font-bold flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
