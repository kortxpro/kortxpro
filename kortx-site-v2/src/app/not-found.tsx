import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body className="bg-[#050a12] text-white min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <div className="font-mono text-7xl font-bold text-[#6366f1]/20 mb-4">404</div>
          <h1 className="text-2xl font-bold mb-2">Página não encontrada</h1>
          <p className="text-[#94a3b8] mb-8">A página que você procura não existe ou foi movida.</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#0a1120] border border-white/10 rounded-lg text-sm font-medium hover:border-[#6366f1]/50 transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </body>
    </html>
  );
}
