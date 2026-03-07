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
        <div className="text-6xl font-bold text-gradient opacity-30 mb-4">500</div>
        <h1 className="text-2xl font-bold mb-2">Algo deu errado</h1>
        <p className="text-text-secondary mb-8">Ocorreu um erro inesperado. Tente novamente.</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium hover:border-indigo/50 transition-all duration-300 cursor-pointer"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
