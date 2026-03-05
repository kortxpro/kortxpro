"use client";

export type MockupVariant =
  | "site-law"
  | "site-health"
  | "site-realestate"
  | "landing-saas"
  | "landing-event"
  | "app-internal"
  | "app-field"
  | "dashboard-finance"
  | "system-logistics";

interface ProjectMockupProps {
  variant: MockupVariant;
  className?: string;
}

/* ─── Shared Frame Components ─── */

function BrowserChrome({ children, url }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="rounded-lg overflow-hidden bg-[#1a1a1a] border border-border">
      <div className="flex items-center gap-2 px-3 py-2 bg-[#111] border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        </div>
        {url && (
          <div className="flex-1 mx-2">
            <div className="h-4 bg-[#0a0a0a] rounded border border-border flex items-center px-2 max-w-[60%] mx-auto">
              <span className="text-[7px] text-text-muted truncate">{url}</span>
            </div>
          </div>
        )}
      </div>
      <div className="aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}

function PhoneChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[180px] sm:w-[200px] rounded-[24px] overflow-hidden border-2 border-[#222] bg-black">
      <div className="flex justify-center bg-black pt-1.5 pb-1">
        <div className="w-16 h-3 bg-[#111] rounded-b-lg" />
      </div>
      <div className="aspect-[9/16] overflow-hidden">{children}</div>
      <div className="flex justify-center bg-black py-1.5">
        <div className="w-10 h-1 bg-[#333] rounded-full" />
      </div>
    </div>
  );
}

/* ─── 9 Inner Mockup Designs (content stays the same) ─── */

function SiteLawContent() {
  return (
    <div className="h-full flex flex-col text-[7px]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1A1A2E]">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-[#C9A84C]" />
          <div className="w-14 h-2 bg-white/80 rounded-sm" />
        </div>
        <div className="flex gap-3">
          {["Sobre", "Áreas", "Equipe", "Contato"].map((l) => (
            <span key={l} className="text-[6px] text-gray-300">{l}</span>
          ))}
        </div>
      </div>
      <div className="relative bg-[#1A1A2E] px-4 py-5 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E] to-[#C9A84C]/10" />
        <div className="relative">
          <div className="w-3 h-0.5 bg-[#C9A84C] mb-2 rounded" />
          <div className="w-32 h-2.5 bg-white/90 rounded-sm mb-1.5" />
          <div className="w-40 h-2 bg-white/60 rounded-sm mb-1" />
          <div className="w-28 h-1.5 bg-white/40 rounded-sm mb-3" />
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-[#C9A84C] rounded text-[6px] text-[#1A1A2E] font-bold">Fale com um especialista</div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F5F0] px-4 py-3 flex-1">
        <div className="grid grid-cols-3 gap-1.5">
          {["Empresarial", "Tributário", "Trabalhista", "Civil", "Contratos", "M&A"].map((area, i) => (
            <div key={i} className="bg-white p-2 rounded border-l-2 border-[#C9A84C] shadow-sm">
              <span className="text-[6px] font-semibold text-[#1A1A2E]">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SiteHealthContent() {
  return (
    <div className="h-full flex flex-col text-[7px]">
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-[#10B981]" />
          <div className="w-12 h-2 bg-[#0A1628]/80 rounded-sm" />
        </div>
        <div className="px-2 py-1 bg-[#10B981] rounded-full text-[6px] text-white">Agendar</div>
      </div>
      <div className="bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] px-4 py-4 flex-shrink-0">
        <div className="w-36 h-2.5 bg-[#064E3B] rounded-sm mb-1.5" />
        <div className="w-44 h-2 bg-[#064E3B]/60 rounded-sm mb-3" />
        <div className="px-3 py-1 bg-[#10B981] rounded-full text-[6px] text-white inline-block">Agendar online</div>
      </div>
      <div className="bg-white px-4 py-3 flex-1">
        <div className="grid grid-cols-4 gap-1.5">
          {["Cardio", "Orto", "Derma", "Pediatria", "Neuro", "Oftalmo", "Gineco", "Uro"].map((s, i) => (
            <div key={i} className="bg-emerald-50 border border-emerald-100 rounded-lg p-1.5 text-center">
              <div className="text-[5px] font-medium text-gray-700">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SiteRealEstateContent() {
  return (
    <div className="h-full flex flex-col text-[7px]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#0A0A0A]">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-4 bg-[#F97316] rounded-sm" />
          <div className="w-14 h-2 bg-white/80 rounded-sm" />
        </div>
      </div>
      <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#F97316]/20 px-4 py-5 flex-shrink-0">
        <span className="text-[6px] text-[#F97316] font-bold uppercase tracking-wider">Novo lançamento</span>
        <div className="w-32 h-3 bg-white/90 rounded-sm mt-1 mb-1.5" />
        <div className="w-40 h-2 bg-white/50 rounded-sm mb-3" />
        <div className="px-3 py-1 bg-[#F97316] rounded text-[6px] text-white font-bold inline-block">Conheça o projeto</div>
      </div>
      <div className="bg-[#FAFAF9] px-4 py-3 flex-1">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { name: "Alto Leblon", color: "from-orange-300 to-amber-500" },
            { name: "Centro Emp.", color: "from-slate-300 to-slate-500" },
            { name: "Jardim Sul", color: "from-emerald-300 to-emerald-500" },
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className={`h-10 bg-gradient-to-br ${p.color}`} />
              <div className="p-1.5">
                <span className="text-[6px] font-bold text-[#0A0A0A]">{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingSaaSContent() {
  return (
    <div className="h-full flex flex-col text-[7px]">
      <div className="flex items-center justify-between px-4 py-2 bg-white/80 border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600" />
          <div className="w-12 h-2 bg-[#0A1628]/70 rounded-sm" />
        </div>
        <div className="px-2 py-0.5 bg-violet-600 rounded text-[6px] text-white">Começar grátis</div>
      </div>
      <div className="bg-gradient-to-b from-violet-50 to-white px-4 pt-4 pb-3 text-center flex-shrink-0">
        <div className="inline-block px-2 py-0.5 bg-violet-100 rounded-full text-[5px] text-violet-600 mb-2">Novo: IA integrada</div>
        <div className="w-44 h-3 bg-[#0A1628] rounded-sm mx-auto mb-1.5" />
        <div className="w-52 h-2 bg-gray-400 rounded-sm mx-auto mb-3" />
        <div className="px-3 py-1 bg-violet-600 rounded-lg text-[6px] text-white inline-block mb-3">Testar 14 dias grátis</div>
        <div className="mx-auto w-[80%] bg-white rounded-lg shadow-lg border border-gray-200 p-1.5">
          <div className="flex gap-1 h-8">
            <div className="w-[20%] bg-violet-50 rounded p-0.5 space-y-0.5">
              {[...Array(4)].map((_, i) => <div key={i} className={`h-1 rounded-sm ${i === 0 ? "bg-violet-400" : "bg-gray-200"}`} />)}
            </div>
            <div className="flex-1 bg-gray-50 rounded p-0.5">
              <div className="grid grid-cols-3 gap-0.5 mb-1">
                {[...Array(3)].map((_, i) => <div key={i} className="h-2 bg-white rounded shadow-sm" />)}
              </div>
              <div className="h-4 bg-white rounded shadow-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-2 flex-1">
        <div className="grid grid-cols-3 gap-2 text-center">
          {["Rápido", "Seguro", "Analytics"].map((f, i) => (
            <div key={i}>
              <div className={`w-6 h-6 ${["bg-amber-50", "bg-blue-50", "bg-emerald-50"][i]} rounded-lg mx-auto mb-1`} />
              <span className="text-[6px] font-bold text-[#0A1628]">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingEventContent() {
  return (
    <div className="h-full flex flex-col text-[7px]">
      <div className="relative bg-gradient-to-br from-[#0F0720] via-[#1E1145] to-[#E11D48]/30 px-4 pt-4 pb-4 text-center flex-1">
        <span className="text-[6px] text-[#E11D48] font-bold uppercase tracking-widest">15-16 Março 2026 • São Paulo</span>
        <div className="w-36 h-3 bg-white/90 rounded-sm mx-auto mt-2 mb-1" />
        <div className="w-44 h-2 bg-white/50 rounded-sm mx-auto mb-3" />
        <div className="flex gap-2 justify-center mb-3">
          {[{ v: "18", l: "Dias" }, { v: "07", l: "Horas" }, { v: "42", l: "Min" }].map((c, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-lg px-2 py-1 border border-white/10">
              <div className="text-[10px] font-bold text-white">{c.v}</div>
              <div className="text-[4px] text-white/50">{c.l}</div>
            </div>
          ))}
        </div>
        <div className="px-4 py-1 bg-[#E11D48] rounded text-[7px] text-white font-bold inline-block">Garantir vaga</div>
      </div>
      <div className="bg-[#0F0720] px-4 py-3">
        <div className="text-[8px] font-bold text-white mb-2 text-center">Speakers</div>
        <div className="grid grid-cols-4 gap-2">
          {["from-[#E11D48] to-pink-600", "from-purple-500 to-violet-600", "from-blue-500 to-cyan-600", "from-amber-500 to-orange-600"].map((color, i) => (
            <div key={i} className="text-center">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} mx-auto mb-1`} />
              <div className="w-10 h-1 bg-white/60 rounded-sm mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppInternalContent() {
  return (
    <div className="h-full flex flex-col bg-[#F8FAFC]">
      <div className="px-3 pt-3 pb-2 bg-[#0A1628]">
        <span className="text-white font-bold text-[10px]">Sistema Interno</span>
        <div className="text-[7px] text-gray-400 mt-0.5">3 chamados • Estoque atualizado</div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 px-3 py-2">
        {[{ icon: "📦", label: "Catálogo" }, { icon: "📋", label: "Chamados" }, { icon: "📊", label: "Estoque" }, { icon: "💬", label: "Equipe" }].map((a, i) => (
          <div key={i} className="bg-white rounded-lg p-1.5 text-center shadow-sm border border-gray-100">
            <span className="text-[10px]">{a.icon}</span>
            <div className="text-[6px] text-gray-500 mt-0.5">{a.label}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 px-3 space-y-1">
        {[{ title: "Manutenção - Linha 3", c: "bg-red-500" }, { title: "Reposição - Setor B", c: "bg-amber-500" }, { title: "Calibração #47", c: "bg-emerald-500" }].map((t, i) => (
          <div key={i} className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 flex items-center gap-2">
            <div className={`w-4 h-4 rounded-md ${t.c} flex items-center justify-center`}><span className="text-white text-[6px]">#</span></div>
            <div className="text-[6px] font-semibold text-[#0A1628] truncate">{t.title}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around px-2 py-2 bg-white border-t border-gray-200">
        {["Home", "Catálogo", "Chamados", "Perfil"].map((tab, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div className={`w-3 h-3 rounded-md ${i === 0 ? "bg-[#00A3FF]" : "bg-gray-200"}`} />
            <span className={`text-[5px] ${i === 0 ? "text-[#00A3FF]" : "text-gray-400"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppFieldContent() {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-3 pt-3 pb-2 bg-[#7C3AED]">
        <span className="text-white font-bold text-[10px]">Tarefas do Dia</span>
        <div className="text-[7px] text-purple-200 mt-0.5">8 tarefas</div>
        <div className="bg-white/15 rounded-full h-2 overflow-hidden mt-2">
          <div className="h-full bg-white/90 rounded-full" style={{ width: "37%" }} />
        </div>
      </div>
      <div className="flex-1 px-3 py-2 space-y-1.5">
        {[
          { task: "Inspeção elétrica - Bloco A", done: true },
          { task: "Troca de filtros - Sala 204", done: true },
          { task: "Vistoria área externa", done: true },
          { task: "Reparo hidráulico - 3º andar", done: false },
          { task: "Checklist segurança mensal", done: false },
        ].map((t, i) => (
          <div key={i} className={`rounded-lg p-2 border flex items-start gap-2 ${t.done ? "bg-gray-50 border-gray-100" : "bg-white border-gray-200"}`}>
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${t.done ? "border-emerald-500 bg-emerald-500" : "border-gray-300"}`}>
              {t.done && <span className="text-white text-[6px]">✓</span>}
            </div>
            <span className={`text-[7px] ${t.done ? "text-gray-400 line-through" : "text-[#0A1628] font-semibold"}`}>{t.task}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around px-2 py-2 bg-white border-t border-gray-200">
        {["Tarefas", "Mapa", "Relatório", "Perfil"].map((tab, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div className={`w-3 h-3 rounded-md ${i === 0 ? "bg-[#7C3AED]" : "bg-gray-200"}`} />
            <span className={`text-[5px] ${i === 0 ? "text-[#7C3AED]" : "text-gray-400"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardFinanceContent() {
  return (
    <div className="h-full flex text-[7px]">
      <div className="w-[22%] bg-[#0F172A] p-2 flex flex-col">
        <div className="flex items-center gap-1.5 mb-4 px-1">
          <div className="w-5 h-5 rounded-md bg-[#00A3FF] flex items-center justify-center"><span className="text-white font-bold text-[6px]">F</span></div>
        </div>
        {["Dashboard", "Transações", "Contas", "Relatórios"].map((item, i) => (
          <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md mb-0.5 ${i === 0 ? "bg-[#00A3FF]/20" : ""}`}>
            <div className={`w-2.5 h-2.5 rounded-sm ${i === 0 ? "bg-[#00A3FF]" : "bg-gray-600"}`} />
            <span className={`leading-none ${i === 0 ? "text-[#00A3FF]" : "text-gray-500"}`}>{item}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-[#F8FAFC] p-3 flex flex-col gap-2">
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { label: "Receita", value: "R$ 847k", color: "text-emerald-500" },
            { label: "Despesas", value: "R$ 321k", color: "text-emerald-500" },
            { label: "Lucro", value: "R$ 525k", color: "text-emerald-500" },
            { label: "A Receber", value: "R$ 156k", color: "text-amber-500" },
          ].map((kpi, i) => (
            <div key={i} className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
              <div className="text-gray-400 text-[6px]">{kpi.label}</div>
              <div className="text-[#0A1628] font-bold text-[8px]">{kpi.value}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-white rounded-lg p-2 border border-gray-100 shadow-sm flex flex-col">
          <span className="text-[#0A1628] font-semibold text-[7px] mb-2">Fluxo de Caixa</span>
          <div className="flex-1 flex items-end gap-[3px]">
            {[65, 72, 58, 80, 75, 90, 85, 70, 78, 92, 88, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-[#00A3FF]/80 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemLogisticsContent() {
  return (
    <div className="h-full flex text-[7px]">
      <div className="w-[20%] bg-[#0F172A] p-2 flex flex-col">
        <div className="flex items-center gap-1.5 mb-4 px-1">
          <div className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center"><span className="text-white font-bold text-[6px]">T</span></div>
        </div>
        {["Operações", "Frotas", "Motoristas", "Rotas"].map((item, i) => (
          <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md mb-0.5 ${i === 0 ? "bg-emerald-500/20" : ""}`}>
            <div className={`w-2.5 h-2.5 rounded-sm ${i === 0 ? "bg-emerald-500" : "bg-gray-600"}`} />
            <span className={`leading-none ${i === 0 ? "text-emerald-400" : "text-gray-500"}`}>{item}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-[#F8FAFC] flex flex-col">
        <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200">
          <span className="text-[#0A1628] font-bold text-[8px]">Operações</span>
          <div className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 rounded">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[6px] text-emerald-600">142 em rota</span>
          </div>
        </div>
        <div className="flex-1 relative bg-[#E8F4F8] overflow-hidden">
          <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gray-300" />
          <div className="absolute top-[50%] left-0 right-0 h-[2px] bg-gray-400" />
          <div className="absolute left-[30%] top-0 bottom-0 w-[1px] bg-gray-300" />
          <div className="absolute left-[60%] top-0 bottom-0 w-[2px] bg-gray-400" />
          {[{ t: "18%", l: "42%", c: "bg-emerald-500" }, { t: "38%", l: "68%", c: "bg-emerald-500" }, { t: "55%", l: "30%", c: "bg-amber-500" }, { t: "72%", l: "75%", c: "bg-red-500" }].map((pin, i) => (
            <div key={i} className="absolute" style={{ top: pin.t, left: pin.l }}>
              <div className={`w-3 h-3 ${pin.c} rounded-full border-2 border-white shadow-md`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── 9 UNIQUE Presentation Wrappers ─── */

// 1. Cinematic: perspective tilt + accent bar
function CinematicPresentation({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative" style={{ perspective: "1200px" }}>
      <div className="absolute -left-2 top-4 bottom-4 w-1 bg-[#C9A84C] rounded-full" />
      <div
        className="transition-transform duration-500 hover:rotate-0"
        style={{ transform: "rotateY(-5deg)", transformOrigin: "center center" }}
      >
        {children}
      </div>
    </div>
  );
}

// 2. Multi-Device Float: 3 screens overlapping
function MultiDevicePresentation() {
  return (
    <div className="relative h-[280px]" style={{ perspective: "1000px" }}>
      {/* Desktop - back */}
      <div
        className="absolute top-0 left-0 w-[75%] z-10"
        style={{ transform: "translateZ(-30px) scale(0.95)" }}
      >
        <BrowserChrome url="clinica.com.br">
          <SiteHealthContent />
        </BrowserChrome>
      </div>
      {/* Tablet - middle */}
      <div
        className="absolute top-6 right-8 w-[45%] z-20 rounded-lg overflow-hidden border border-border"
        style={{ transform: "translateZ(10px)" }}
      >
        <div className="aspect-[4/3] overflow-hidden bg-white">
          <SiteHealthContent />
        </div>
      </div>
      {/* Phone - front */}
      <div
        className="absolute bottom-0 right-0 z-30"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="w-[100px] rounded-[12px] overflow-hidden border border-[#222] bg-black">
          <div className="aspect-[9/16] overflow-hidden">
            <SiteHealthContent />
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Isometric 3D: architectural projection
function IsometricPresentation({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ perspective: "1200px" }}>
      <div
        className="transition-transform duration-500 shadow-2xl shadow-black/30"
        style={{ transform: "rotateX(20deg) rotateY(-15deg) rotateZ(2deg)", transformOrigin: "center center" }}
      >
        {children}
      </div>
    </div>
  );
}

// 4. Perspective Hero: recessed, scales up on hover
function PerspectivePresentation({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ perspective: "1200px" }}>
      <div
        className="transition-transform duration-700 hover:scale-100 hover:[transform:rotateX(0deg)]"
        style={{ transform: "rotateX(25deg) scale(0.9)", transformOrigin: "bottom center" }}
      >
        {children}
      </div>
    </div>
  );
}

// 5. Full-Bleed Immersive: mockup IS the background
function FullBleedPresentation() {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <LandingEventContent />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-4 left-4 z-10">
        <span className="font-mono text-[10px] text-accent uppercase tracking-wider">Evento Corporativo</span>
      </div>
    </div>
  );
}

// 6. Device Cluster: phone + floating UI cards
function DeviceClusterPresentation() {
  return (
    <div className="relative flex justify-center" style={{ perspective: "800px" }}>
      <PhoneChrome>
        <AppInternalContent />
      </PhoneChrome>
      {/* Floating cards */}
      <div
        className="absolute -right-4 top-8 bg-surface-elevated border border-border rounded-lg p-2 text-[8px] text-text shadow-xl"
        style={{ transform: "translateZ(60px) rotate(3deg)" }}
      >
        <div className="font-mono text-accent text-[7px] mb-1">Chamados</div>
        <div className="w-20 h-1.5 bg-border rounded" />
        <div className="w-16 h-1.5 bg-border rounded mt-1" />
      </div>
      <div
        className="absolute -left-4 bottom-16 bg-surface-elevated border border-border rounded-lg p-2 text-[8px] text-text shadow-xl"
        style={{ transform: "translateZ(40px) rotate(-2deg)" }}
      >
        <div className="font-mono text-[7px] text-text-muted mb-1">Estoque</div>
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-[#00A3FF]/20 rounded" />
          <div className="w-4 h-4 bg-amber-500/20 rounded" />
          <div className="w-4 h-4 bg-emerald-500/20 rounded" />
        </div>
      </div>
    </div>
  );
}

// 7. Hand-Held Angle: natural tilt like holding a phone
function HandHeldPresentation() {
  return (
    <div className="flex justify-center" style={{ perspective: "600px" }}>
      <div style={{ transform: "rotate(-5deg) translateY(10px)" }}>
        <PhoneChrome>
          <AppFieldContent />
        </PhoneChrome>
      </div>
    </div>
  );
}

// 8. Split Screen: blurred bg + crisp detail panels
function SplitScreenPresentation() {
  return (
    <div className="relative h-[260px] rounded-lg overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 opacity-30 blur-[1px] scale-105">
        <DashboardFinanceContent />
      </div>
      {/* Crisp detail panels */}
      <div className="relative z-10 flex gap-3 p-4 h-full items-center justify-center">
        <div className="bg-white rounded-lg p-3 shadow-xl border border-gray-100 w-36">
          <div className="text-gray-400 text-[6px]">Receita Total</div>
          <div className="text-[#0A1628] font-bold text-[11px]">R$ 847.2k</div>
          <div className="text-emerald-500 text-[7px]">+12.5%</div>
          <div className="flex items-end gap-[2px] mt-2 h-8">
            {[40, 55, 45, 65, 60, 75, 70, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-[#00A3FF]/60 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-xl border border-gray-100 w-36">
          <div className="text-gray-400 text-[6px]">Despesas por Categoria</div>
          <div className="flex justify-center my-2">
            <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
              <circle cx="18" cy="18" r="13" fill="none" stroke="#E2E8F0" strokeWidth="5" />
              <circle cx="18" cy="18" r="13" fill="none" stroke="#00A3FF" strokeWidth="5" strokeDasharray="32 82" strokeLinecap="round" />
              <circle cx="18" cy="18" r="13" fill="none" stroke="#8B5CF6" strokeWidth="5" strokeDasharray="20 82" strokeDashoffset="-32" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// 9. Mosaic Bento: system broken into asymmetric panels
function MosaicPresentation() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[260px]">
      {/* Map panel - spans 2 cols */}
      <div className="col-span-2 row-span-1 rounded-lg overflow-hidden border border-border bg-[#E8F4F8] relative">
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gray-300" />
        <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-gray-300" />
        {[{ t: "25%", l: "30%", c: "bg-emerald-500" }, { t: "45%", l: "60%", c: "bg-emerald-500" }, { t: "65%", l: "40%", c: "bg-amber-500" }].map((pin, i) => (
          <div key={i} className="absolute" style={{ top: pin.t, left: pin.l }}>
            <div className={`w-2.5 h-2.5 ${pin.c} rounded-full border-2 border-white shadow`} />
          </div>
        ))}
        <div className="absolute bottom-2 left-2 font-mono text-[7px] text-text-muted">Mapa de Operações</div>
      </div>
      {/* Stats panel */}
      <div className="row-span-1 rounded-lg overflow-hidden border border-border bg-surface-elevated p-3 flex flex-col justify-between">
        <div className="font-mono text-[7px] text-text-muted">Veículos</div>
        <div className="font-display text-2xl text-white">142</div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[7px] text-emerald-400">Em rota</span>
        </div>
      </div>
      {/* Alert panel */}
      <div className="row-span-1 rounded-lg overflow-hidden border border-border bg-red-500/5 p-3 flex flex-col justify-between">
        <div className="font-mono text-[7px] text-red-400">Alertas</div>
        <div className="font-display text-xl text-red-400">3</div>
        <div className="text-[7px] text-text-muted">2 atrasos, 1 desvio</div>
      </div>
      {/* Fleet list panel - spans 2 cols */}
      <div className="col-span-2 row-span-1 rounded-lg overflow-hidden border border-border bg-surface-elevated p-3">
        <div className="font-mono text-[7px] text-text-muted mb-2">Frota Ativa</div>
        <div className="flex gap-2">
          {[{ id: "FRT-001", s: "Em rota", c: "bg-emerald-500" }, { id: "FRT-007", s: "Em rota", c: "bg-emerald-500" }, { id: "FRT-012", s: "Parado", c: "bg-amber-500" }, { id: "FRT-019", s: "Atrasado", c: "bg-red-500" }].map((v, i) => (
            <div key={i} className="flex items-center gap-1 bg-black/20 rounded px-2 py-1">
              <div className={`w-1.5 h-1.5 rounded-full ${v.c}`} />
              <span className="text-[7px] text-text">{v.id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export function ProjectMockup({ variant, className = "" }: ProjectMockupProps) {
  return (
    <div className={className}>
      {variant === "site-law" && (
        <CinematicPresentation>
          <BrowserChrome url="www.clienteconfidencial.com.br">
            <SiteLawContent />
          </BrowserChrome>
        </CinematicPresentation>
      )}
      {variant === "site-health" && <MultiDevicePresentation />}
      {variant === "site-realestate" && (
        <IsometricPresentation>
          <BrowserChrome url="www.clienteconfidencial.com.br">
            <SiteRealEstateContent />
          </BrowserChrome>
        </IsometricPresentation>
      )}
      {variant === "landing-saas" && (
        <PerspectivePresentation>
          <BrowserChrome url="www.clienteconfidencial.io">
            <LandingSaaSContent />
          </BrowserChrome>
        </PerspectivePresentation>
      )}
      {variant === "landing-event" && <FullBleedPresentation />}
      {variant === "app-internal" && <DeviceClusterPresentation />}
      {variant === "app-field" && <HandHeldPresentation />}
      {variant === "dashboard-finance" && <SplitScreenPresentation />}
      {variant === "system-logistics" && <MosaicPresentation />}
    </div>
  );
}
