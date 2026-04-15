import Link from 'next/link';
import { Home, Settings, GitBranch } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo ou Nome do Projeto */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-blue-600 font-bold text-xl tracking-tight">GitGuide</span>
          </div>

          {/* Links de Navegação */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors gap-2"
            >
              <Home size={18} />
              Início
            </Link>

            <Link 
              href="/paginas/configuracao" 
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors gap-2"
            >
              <Settings size={18} />
              Configuração
            </Link>

            <Link 
              href="/paginas/repositorio" 
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors gap-2"
            >
              <GitBranch size={18} />
              Repositório
            </Link>
          </div>

          {/* Versão Mobile (Simplificada) */}
          <div className="md:hidden flex space-x-4">
             <Link href="/"><Home size={20} className="text-slate-600" /></Link>
             <Link href="/paginas/configuracao"><Settings size={20} className="text-slate-600" /></Link>
             <Link href="/paginas/repositorio"><GitBranch size={20} className="text-slate-600" /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;