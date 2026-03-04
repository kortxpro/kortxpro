"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
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

        <h1 className="text-2xl font-bold text-white mb-4">
          Algo deu errado
        </h1>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          Ocorreu um erro inesperado. Por favor, tente novamente.
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A3FF] text-white font-medium rounded-lg hover:bg-[#0091E6] transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
