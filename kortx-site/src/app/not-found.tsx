import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <div className="min-h-screen flex items-center justify-center bg-[#0A1628] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00A3FF]/[0.05] blur-[100px]" />
          <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#00A3FF]/[0.03] blur-[80px]" />

          <div className="relative z-10 text-center px-4">
            {/* Logo mark */}
            <div className="mb-8 flex justify-center">
              <div className="w-12 h-12 bg-[#00A3FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
            </div>

            {/* 404 */}
            <h1 className="text-8xl font-bold text-white/10 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-white mb-4">
              Pagina nao encontrada
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              A pagina que voce esta procurando nao existe ou foi movida.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A3FF] text-white font-medium rounded-lg hover:bg-[#0091E6] transition-colors"
            >
              Voltar ao inicio
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
