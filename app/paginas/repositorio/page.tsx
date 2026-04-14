"use client"

import { useState } from "react"
import { Check, Copy, Terminal, GitBranch, FolderGit2, Link2, Unlink, AlertCircle } from "lucide-react"

interface Step {
  number: number
  title: string
  description: string
  command?: string
  note?: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: 1,
    title: "Criar um repositório no GitHub",
    description:
      "Acesse github.com, faça login e clique em 'New repository'. Dê um nome ao repositório e clique em 'Create repository'.",
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    number: 2,
    title: "Inicializar o Git no projeto",
    description: "Na pasta do projeto do Visual Studio, abra o terminal e digite o comando abaixo:",
    command: "git init",
    note: "Inicializa o Git dentro da pasta do projeto",
    icon: <FolderGit2 className="h-5 w-5" />,
  },
  {
    number: 3,
    title: "Verificar repositório conectado",
    description: "Para verificar se há algum repositório remoto conectado ao projeto:",
    command: "git remote -v",
    icon: <Terminal className="h-5 w-5" />,
  },
  {
    number: 4,
    title: "Conectar ao repositório criado",
    description: "Conecte seu projeto local ao repositório remoto do GitHub:",
    command: 'git remote add origin "https://github.com/usuario/repositorio"',
    note: "Substitua 'usuario' pelo seu nome de usuário e 'repositorio' pelo nome do seu repositório",
    icon: <Link2 className="h-5 w-5" />,
  },
  {
    number: 5,
    title: "Remover repositório (se necessário)",
    description: "Caso precise remover a conexão com um repositório para conectar em outro:",
    command: "git remote remove origin",
    note: "Após remover, use o comando do passo 4 para conectar ao novo repositório",
    icon: <Unlink className="h-5 w-5" />,
  },
]

function CodeBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative mt-3 group">
      <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm text-blue-300 overflow-x-auto">
        <code>{command}</code>
      </div>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-slate-700 hover:bg-slate-600 transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copiar comando"
      >
        {copied ? (
          <Check className="h-4 w-4 text-blue-400" />
        ) : (
          <Copy className="h-4 w-4 text-slate-400" />
        )}
      </button>
    </div>
  )
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Linha conectora */}
      <div className="absolute left-[15px] top-10 bottom-0 w-0.5 bg-blue-200 last:hidden" />
      
      {/* Número do passo */}
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-semibold text-sm border border-blue-400">
        {step.number}
      </div>

      <div className="ml-6 bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-500">{step.icon}</span>
          <h3 className="text-lg font-semibold text-slate-800">{step.title}</h3>
        </div>
        
        <p className="text-slate-600 leading-relaxed">{step.description}</p>
        
        {step.command && <CodeBlock command={step.command} />}
        
        {step.note && (
          <div className="mt-3 flex items-start gap-2 text-sm text-blue-600 bg-blue-50 border border-blue-100 rounded-lg p-3">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{step.note}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function GitHubGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 mb-6">
            <GitBranch className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 text-balance">
            Como conectar o Visual Studio ao GitHub
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto text-pretty">
            Guia passo a passo para vincular seu projeto local a um repositório remoto no GitHub
          </p>
        </div>

        {/* Passos */}
        <div className="space-y-0">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        {/* Dica final */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-500" />
            Comandos extras uteis
          </h4>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-500 mb-1">Adicionar todos os arquivos ao stage:</p>
              <CodeBlock command="git add ." />
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Criar um commit:</p>
              <CodeBlock command='git commit -m "Primeiro commit"' />
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Enviar para o GitHub:</p>
              <CodeBlock command="git push -u origin main" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-12">
          Clique nos blocos de codigo para copiar os comandos
        </p>
      </div>
    </main>
  )
}
