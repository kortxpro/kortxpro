import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body className="bg-[#050505] text-white min-h-screen flex items-center justify-center font-sans">
        <div className="text-center px-6">
          <div className="text-8xl font-bold bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent mb-6">
            404
          </div>
          <h1 className="text-2xl font-bold mb-2">Página não encontrada</h1>
          <p className="text-[#a3a3a3] mb-8">A página que você procura não existe ou foi movida.</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#111111] border border-[#2a2a2a] rounded-full text-sm font-medium hover:border-[#6366f1]/50 transition-all duration-300"
          >
            Voltar ao início
          </Link>
        </div>
      </body>
    </html>
  );
}
