import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-20 px-8 bg-white dark:bg-zinc-900 shadow-sm sm:items-start sm:rounded-2xl my-10">
        
        {/* Header com Logo */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-black dark:bg-white p-2 rounded-full">
            <Image
              className="invert dark:invert-0"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <span className="text-2xl font-bold tracking-tighter dark:text-white">GitHub</span>
        </div>

        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            A plataforma onde o mundo constrói software.
          </h1>
          
          <div className="grid gap-6 sm:grid-cols-2 mt-4">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">O que é?</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                O GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o <strong>Git</strong>. É como uma rede social para programadores.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Para que serve?</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Permite que desenvolvedores trabalhem em projetos colaborativos de qualquer lugar, mantenham um histórico de alterações e compartilhem seus portfólios com o mundo.
              </p>
            </section>
          </div>

          <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-4" />

          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-lg font-medium dark:text-white">Principais recursos:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Repositórios Remotos
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Pull Requests (Code Review)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> GitHub Actions (CI/CD)
              </li>
            </ul>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col gap-4 mt-12 w-full sm:flex-row">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-black text-white px-8 text-sm font-medium transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            href="https://github.com/join"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criar conta grátis
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-lg border border-zinc-200 px-8 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            href="https://docs.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentação
          </a>
        </div>
      </main>
    </div>
  );
}