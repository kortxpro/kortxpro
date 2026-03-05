"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-mono text-6xl font-bold text-accent/20 mb-4">500</div>
        <h1 className="text-2xl font-bold text-white mb-2">Algo deu errado</h1>
        <p className="text-text-secondary mb-8">Ocorreu um erro inesperado. Tente novamente.</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-bg-elevated border border-white/10 rounded-lg text-sm font-medium hover:border-accent/50 transition-colors text-white"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
