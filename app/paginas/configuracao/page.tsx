export default function Configuracao() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 font-sans dark:bg-zinc-950">
      <main className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Configuração do GitHub no VS Code
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Siga os passos abaixo para preparar seu ambiente de desenvolvimento local.
          </p>
        </div>

        <div className="space-y-8">
          {/* Passo 1*/}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs text-white dark:bg-zinc-50 dark:text-black">1</span>
              Instalar o Git via Terminal
            </h2>
            <div className="rounded-lg bg-zinc-100 p-4 dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <code className="text-sm text-blue-600 dark:text-blue-400">
                winget install --id Git.Git -e --source winget
              </code>
            </div>
          </section>
          {/* Passo 1.1*/}
           <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs text-white dark:bg-zinc-50 dark:text-black">1.1</span>
              Reiniciar o Visual Studio Code
            </h2>
            <div className="rounded-lg bg-zinc-100 p-4 dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <code className="text-sm text-amber-600 dark:text-amber-400 font-medium">Lembre-se de reiniciar o VS Code para que ele reconheça a instalação do Git.</code>
            </div>
            <div className="rounded-lg bg-zinc-100 p-4 dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <code className="text-sm text-blue-600 dark:text-blue-400">
                No terminal do VS Code (CTRL + `) digite o comando:
              </code>
              <div className="relative group">
                <pre className="bg-zinc-900 text-zinc-100 p-4 rounde-xl overflow-x-a
                text-sm border border-zinc-700
                ">
              <code className="text-sm text-blue-600 dark:text-blue-400">
                git --version
              </code>
              </pre>
              </div>
            </div>
          </section>


          {/* Passo 2 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs text-white dark:bg-zinc-50 dark:text-black">2</span>
              Configurar Identidade
            </h2>
            <div className="space-y-3 rounded-lg bg-zinc-100 p-4 dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col gap-2">
                <p className="text-xs text-zinc-500 uppercase font-bold">Email do GitHub:</p>
                <code className="text-sm text-emerald-600 dark:text-emerald-400">
                  git config --global user.email {'seu-email@exemplo.com'}
                </code>
              </div>
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full" />
              <div className="flex flex-col gap-2">
                <p className="text-xs text-zinc-500 uppercase font-bold">Nome de Usuário:</p>
                <code className="text-sm text-emerald-600 dark:text-emerald-400">
                  git config --global user.name {'SeuUsuario'}
                </code>
              </div>
            </div>
          </section>

          {/* Passo 3 */}
          <section className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
            <h2 className="text-sm font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-1">
              Importante
            </h2>
            <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
              Após rodar os comandos, o VS Code abrirá uma janela no seu navegador pedindo permissão. 
              <strong> Autorize o acesso</strong> para vincular sua conta e realizar commits com segurança.
            </p>
          </section>
        </div>

        <footer className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <button 
            
            className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors"
          >
            ← Voltar para a documentação
          </button>
        </footer>
      </main>
    </div>
  );
}