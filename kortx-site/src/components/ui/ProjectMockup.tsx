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

function BrowserFrame({ children, url }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-5 bg-white rounded-md border border-gray-200 flex items-center px-3 max-w-[70%] mx-auto">
            {url && <span className="text-[8px] text-gray-400 truncate">{url}</span>}
          </div>
        </div>
      </div>
      <div className="bg-white aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-[200px] sm:w-[220px] rounded-[28px] overflow-hidden border-[3px] border-gray-800 bg-white shadow-2xl">
        <div className="flex justify-center bg-gray-800 pt-1 pb-1">
          <div className="w-20 h-4 bg-gray-900 rounded-b-xl flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-700" />
          </div>
        </div>
        <div className="bg-white aspect-[9/16] overflow-hidden">{children}</div>
        <div className="flex justify-center bg-gray-800 py-2">
          <div className="w-12 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}

{/* ===== SITE INSTITUCIONAL — Escritório de Advocacia (dark, gold) ===== */}
function SiteLawMockup() {
  return (
    <BrowserFrame url="www.clienteconfidencial.com.br">
      <div className="h-full flex flex-col text-[7px]">
        {/* Nav */}
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
          <div className="px-2 py-1 bg-[#C9A84C] rounded text-[6px] text-[#1A1A2E] font-bold">Agende</div>
        </div>
        {/* Hero */}
        <div className="relative bg-[#1A1A2E] px-4 py-5 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E] to-[#C9A84C]/10" />
          <div className="relative">
            <div className="w-3 h-0.5 bg-[#C9A84C] mb-2 rounded" />
            <div className="w-32 h-2.5 bg-white/90 rounded-sm mb-1.5" />
            <div className="w-40 h-2 bg-white/60 rounded-sm mb-1" />
            <div className="w-28 h-1.5 bg-white/40 rounded-sm mb-3" />
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-[#C9A84C] rounded text-[6px] text-[#1A1A2E] font-bold">Fale com um especialista</div>
              <div className="px-3 py-1 border border-[#C9A84C]/50 rounded text-[6px] text-[#C9A84C]">Nossas áreas</div>
            </div>
          </div>
        </div>
        {/* Areas de atuacao */}
        <div className="bg-[#F7F5F0] px-4 py-3 flex-1">
          <div className="text-[8px] font-bold text-[#1A1A2E] mb-2">Áreas de Atuação</div>
          <div className="grid grid-cols-3 gap-1.5">
            {["Direito Empresarial", "Tributário", "Trabalhista", "Civil", "Contratos", "M&A"].map((area, i) => (
              <div key={i} className="bg-white p-2 rounded border-l-2 border-[#C9A84C] shadow-sm">
                <div className="w-3 h-3 bg-[#C9A84C]/10 rounded mb-1 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#C9A84C]/40 rounded-sm" />
                </div>
                <span className="text-[6px] font-semibold text-[#1A1A2E]">{area}</span>
                <div className="w-full h-1 bg-gray-200 rounded mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

{/* ===== SITE INSTITUCIONAL — Clínica de Saúde (light, green) ===== */}
function SiteHealthMockup() {
  return (
    <BrowserFrame url="www.clienteconfidencial.com.br">
      <div className="h-full flex flex-col text-[7px]">
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-[#10B981]" />
            <div className="w-12 h-2 bg-[#0A1628]/80 rounded-sm" />
          </div>
          <div className="flex gap-3">
            {["Especialidades", "Médicos", "Unidades", "Exames"].map((l) => (
              <span key={l} className="text-[6px] text-gray-500">{l}</span>
            ))}
          </div>
          <div className="px-2 py-1 bg-[#10B981] rounded-full text-[6px] text-white font-medium">Agendar consulta</div>
        </div>
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] px-4 py-4 flex items-center gap-4 flex-shrink-0">
          <div className="flex-1">
            <div className="w-36 h-2.5 bg-[#064E3B] rounded-sm mb-1.5" />
            <div className="w-44 h-2 bg-[#064E3B]/60 rounded-sm mb-1" />
            <div className="w-32 h-1.5 bg-[#064E3B]/40 rounded-sm mb-3" />
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-[#10B981] rounded-full text-[6px] text-white">Agendar online</div>
              <div className="px-3 py-1 bg-white border border-[#10B981] rounded-full text-[6px] text-[#10B981]">WhatsApp</div>
            </div>
          </div>
          <div className="w-20 h-16 bg-[#10B981]/20 rounded-xl flex items-center justify-center">
            <div className="w-8 h-10 bg-[#10B981]/30 rounded-lg" />
          </div>
        </div>
        {/* Especialidades */}
        <div className="bg-white px-4 py-3 flex-1">
          <div className="text-[8px] font-bold text-[#064E3B] mb-2">Nossas Especialidades</div>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { name: "Cardiologia", color: "bg-red-50 border-red-200", icon: "❤️" },
              { name: "Ortopedia", color: "bg-blue-50 border-blue-200", icon: "🦴" },
              { name: "Dermatologia", color: "bg-pink-50 border-pink-200", icon: "🧴" },
              { name: "Pediatria", color: "bg-yellow-50 border-yellow-200", icon: "👶" },
              { name: "Neurologia", color: "bg-purple-50 border-purple-200", icon: "🧠" },
              { name: "Oftalmologia", color: "bg-cyan-50 border-cyan-200", icon: "👁️" },
              { name: "Ginecologia", color: "bg-rose-50 border-rose-200", icon: "🩺" },
              { name: "Urologia", color: "bg-indigo-50 border-indigo-200", icon: "💊" },
            ].map((s, i) => (
              <div key={i} className={`${s.color} border rounded-lg p-1.5 text-center`}>
                <span className="text-[9px]">{s.icon}</span>
                <div className="text-[5px] font-medium text-gray-700 mt-0.5">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

{/* ===== SITE INSTITUCIONAL — Construtora / Imobiliária (bold, orange) ===== */}
function SiteRealEstateMockup() {
  return (
    <BrowserFrame url="www.clienteconfidencial.com.br">
      <div className="h-full flex flex-col text-[7px]">
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0A0A0A]">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-4 bg-[#F97316] rounded-sm" />
            <div className="w-14 h-2 bg-white/80 rounded-sm" />
          </div>
          <div className="flex gap-3">
            {["Empreendimentos", "A Empresa", "Obras", "Contato"].map((l) => (
              <span key={l} className="text-[6px] text-gray-300">{l}</span>
            ))}
          </div>
        </div>
        {/* Hero with "image" */}
        <div className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1C1917] to-[#F97316]/20 px-4 py-5 flex-shrink-0">
          <div className="absolute top-2 right-4 w-28 h-18 bg-[#F97316]/10 rounded-lg border border-[#F97316]/20 flex items-end p-1">
            <div className="w-6 h-10 bg-gray-600/40 rounded-sm mr-0.5" />
            <div className="w-8 h-14 bg-gray-500/40 rounded-sm mr-0.5" />
            <div className="w-7 h-8 bg-gray-600/40 rounded-sm" />
          </div>
          <div className="relative z-10">
            <span className="text-[6px] text-[#F97316] font-bold uppercase tracking-wider">Novo lançamento</span>
            <div className="w-32 h-3 bg-white/90 rounded-sm mt-1 mb-1.5" />
            <div className="w-40 h-2 bg-white/50 rounded-sm mb-3" />
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-[#F97316] rounded text-[6px] text-white font-bold">Conheça o projeto</div>
              <div className="px-3 py-1 border border-white/30 rounded text-[6px] text-white">Tour virtual</div>
            </div>
          </div>
        </div>
        {/* Projects grid */}
        <div className="bg-[#FAFAF9] px-4 py-3 flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] font-bold text-[#0A0A0A]">Empreendimentos</span>
            <div className="flex gap-1">
              {["Todos", "Residencial", "Comercial"].map((f, i) => (
                <span key={f} className={`text-[5px] px-1.5 py-0.5 rounded-full ${i === 0 ? "bg-[#F97316] text-white" : "bg-gray-200 text-gray-500"}`}>{f}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { name: "Residencial Alto Leblon", status: "Lançamento", color: "from-orange-300 to-amber-500" },
              { name: "Comercial Centro Emp.", status: "Em obras", color: "from-slate-300 to-slate-500" },
              { name: "Condomínio Jardim Sul", status: "Pronto", color: "from-emerald-300 to-emerald-500" },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className={`h-10 bg-gradient-to-br ${p.color}`} />
                <div className="p-1.5">
                  <span className="text-[6px] font-bold text-[#0A0A0A] block">{p.name}</span>
                  <span className={`text-[5px] px-1 py-0.5 rounded mt-0.5 inline-block ${i === 0 ? "bg-orange-100 text-orange-600" : i === 1 ? "bg-blue-100 text-blue-600" : "bg-emerald-100 text-emerald-600"}`}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

{/* ===== LANDING PAGE — SaaS Product (purple gradient) ===== */}
function LandingSaaSMockup() {
  return (
    <BrowserFrame url="www.clienteconfidencial.io">
      <div className="h-full flex flex-col text-[7px]">
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600" />
            <div className="w-12 h-2 bg-[#0A1628]/70 rounded-sm" />
          </div>
          <div className="flex gap-3 items-center">
            {["Features", "Preços", "Docs"].map((l) => (
              <span key={l} className="text-[6px] text-gray-500">{l}</span>
            ))}
            <div className="px-2 py-0.5 bg-violet-600 rounded text-[6px] text-white">Começar grátis</div>
          </div>
        </div>
        {/* Hero */}
        <div className="bg-gradient-to-b from-violet-50 via-white to-white px-4 pt-4 pb-3 text-center flex-shrink-0">
          <div className="inline-block px-2 py-0.5 bg-violet-100 rounded-full text-[5px] text-violet-600 mb-2">Novo: Integrações com IA</div>
          <div className="w-44 h-3 bg-[#0A1628] rounded-sm mx-auto mb-1.5" />
          <div className="w-52 h-2 bg-gray-400 rounded-sm mx-auto mb-1" />
          <div className="w-36 h-1.5 bg-gray-300 rounded-sm mx-auto mb-3" />
          <div className="flex gap-2 justify-center mb-3">
            <div className="px-3 py-1 bg-violet-600 rounded-lg text-[6px] text-white font-medium">Testar 14 dias grátis</div>
            <div className="px-3 py-1 border border-gray-300 rounded-lg text-[6px] text-gray-600">Ver demo</div>
          </div>
          {/* Mini product screenshot */}
          <div className="mx-auto w-[80%] bg-white rounded-lg shadow-lg border border-gray-200 p-1.5">
            <div className="flex gap-1 mb-1">
              <div className="w-1 h-1 rounded-full bg-red-400" />
              <div className="w-1 h-1 rounded-full bg-yellow-400" />
              <div className="w-1 h-1 rounded-full bg-green-400" />
            </div>
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
        {/* Features */}
        <div className="bg-white px-4 py-2 flex-1">
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: "⚡", title: "Rápido", color: "bg-amber-50" },
              { icon: "🔒", title: "Seguro", color: "bg-blue-50" },
              { icon: "📊", title: "Analytics", color: "bg-emerald-50" },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <div className={`w-6 h-6 ${f.color} rounded-lg mx-auto mb-1 flex items-center justify-center text-[10px]`}>{f.icon}</div>
                <span className="text-[6px] font-bold text-[#0A1628]">{f.title}</span>
                <div className="w-full h-1 bg-gray-200 rounded mt-0.5" />
                <div className="w-3/4 h-1 bg-gray-200 rounded mt-0.5 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

{/* ===== LANDING PAGE — Evento Corporativo (dark, dynamic) ===== */}
function LandingEventMockup() {
  return (
    <BrowserFrame url="www.clienteconfidencial.com.br/evento">
      <div className="h-full flex flex-col text-[7px]">
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2 bg-transparent absolute top-[34px] left-0 right-0 z-10">
          <div className="w-14 h-2 bg-white/80 rounded-sm" />
          <div className="flex gap-3 items-center">
            {["Programação", "Speakers", "Local"].map((l) => (
              <span key={l} className="text-[6px] text-white/70">{l}</span>
            ))}
            <div className="px-2 py-0.5 bg-[#E11D48] rounded text-[6px] text-white font-bold">Inscreva-se</div>
          </div>
        </div>
        {/* Hero */}
        <div className="relative bg-gradient-to-br from-[#0F0720] via-[#1E1145] to-[#E11D48]/30 px-4 pt-8 pb-4 text-center flex-shrink-0">
          {/* Decorative elements */}
          <div className="absolute top-3 left-6 w-8 h-8 rounded-full border border-[#E11D48]/20" />
          <div className="absolute bottom-4 right-8 w-12 h-12 rounded-full border border-purple-500/20" />
          <div className="relative z-10">
            <span className="text-[6px] text-[#E11D48] font-bold uppercase tracking-widest">15-16 Março 2026 • São Paulo</span>
            <div className="w-36 h-3 bg-white/90 rounded-sm mx-auto mt-1.5 mb-1" />
            <div className="w-44 h-2 bg-white/50 rounded-sm mx-auto mb-3" />
            {/* Countdown */}
            <div className="flex gap-2 justify-center mb-3">
              {[{ v: "18", l: "Dias" }, { v: "07", l: "Horas" }, { v: "42", l: "Min" }].map((c, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-lg px-2 py-1 border border-white/10">
                  <div className="text-[10px] font-bold text-white">{c.v}</div>
                  <div className="text-[4px] text-white/50">{c.l}</div>
                </div>
              ))}
            </div>
            <div className="px-4 py-1 bg-[#E11D48] rounded text-[7px] text-white font-bold inline-block">Garantir minha vaga</div>
          </div>
        </div>
        {/* Speakers */}
        <div className="bg-[#0F0720] px-4 py-3 flex-1">
          <div className="text-[8px] font-bold text-white mb-2 text-center">Speakers Confirmados</div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { color: "from-[#E11D48] to-pink-600", role: "CEO, TechCorp" },
              { color: "from-purple-500 to-violet-600", role: "CTO, DataAI" },
              { color: "from-blue-500 to-cyan-600", role: "VP Eng, Cloud" },
              { color: "from-amber-500 to-orange-600", role: "Founder, Startup" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${s.color} mx-auto mb-1`} />
                <div className="w-10 h-1 bg-white/60 rounded-sm mx-auto mb-0.5" />
                <span className="text-[5px] text-white/40">{s.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

{/* ===== APP MOBILE — Sistema Interno & Catálogo ===== */}
function AppInternalMockup() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-[#F8FAFC]">
        <div className="flex items-center justify-between px-3 py-1 bg-[#0A1628]">
          <span className="text-[7px] text-white/70">9:41</span>
          <div className="w-3 h-1.5 border border-white/50 rounded-sm"><div className="w-2 h-full bg-white/70 rounded-sm" /></div>
        </div>
        <div className="px-3 pt-3 pb-2 bg-[#0A1628]">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-white font-bold text-[10px]">Sistema Interno</span>
              <div className="text-[7px] text-gray-400 mt-0.5">3 chamados • Estoque atualizado</div>
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00A3FF] to-cyan-400 flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">R</span>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg px-2 py-1.5 flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border border-white/40" />
            <span className="text-[7px] text-gray-400">Buscar produto, chamado...</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1.5 px-3 py-2">
          {[{ icon: "📦", label: "Catálogo" }, { icon: "📋", label: "Chamados" }, { icon: "📊", label: "Estoque" }, { icon: "💬", label: "Equipe" }].map((a, i) => (
            <div key={i} className="bg-white rounded-lg p-1.5 text-center shadow-sm border border-gray-100">
              <span className="text-[10px]">{a.icon}</span>
              <div className="text-[6px] text-gray-500 mt-0.5">{a.label}</div>
            </div>
          ))}
        </div>
        <div className="px-3 mb-1 flex items-center justify-between">
          <span className="text-[8px] font-bold text-[#0A1628]">Catálogo de Produtos</span>
          <span className="text-[6px] text-[#00A3FF]">Ver todos</span>
        </div>
        <div className="px-3 flex gap-1.5 mb-2">
          {[{ name: "Sensor Industrial X1", stock: "Em estoque", color: "bg-[#00A3FF]" }, { name: "Módulo IoT Pro", stock: "12 unid.", color: "bg-purple-500" }, { name: "Controlador CLP", stock: "Baixo", color: "bg-amber-500" }].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-1.5 shadow-sm border border-gray-100 w-[32%] flex-shrink-0">
              <div className={`w-full aspect-square rounded-md ${item.color}/10 flex items-center justify-center mb-1`}>
                <div className={`w-5 h-5 ${item.color}/20 rounded-md`} />
              </div>
              <div className="text-[6px] font-semibold text-[#0A1628] truncate">{item.name}</div>
              <div className={`text-[5px] mt-0.5 ${i === 2 ? "text-amber-500" : "text-emerald-500"}`}>{item.stock}</div>
            </div>
          ))}
        </div>
        <div className="px-3 mb-1"><span className="text-[8px] font-bold text-[#0A1628]">Chamados Recentes</span></div>
        <div className="flex-1 px-3 space-y-1 overflow-hidden">
          {[{ title: "Manutenção - Linha 3", p: "Alta", c: "bg-red-100 text-red-600", ic: "bg-red-500" }, { title: "Reposição peças - Setor B", p: "Média", c: "bg-amber-100 text-amber-600", ic: "bg-amber-500" }, { title: "Calibração equip. #47", p: "Baixa", c: "bg-emerald-100 text-emerald-600", ic: "bg-emerald-500" }].map((t, i) => (
            <div key={i} className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 flex items-center gap-2">
              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${t.ic}`}><span className="text-white text-[6px] font-bold">#</span></div>
              <div className="flex-1 min-w-0"><div className="text-[6px] font-semibold text-[#0A1628] truncate">{t.title}</div></div>
              <span className={`text-[5px] px-1.5 py-0.5 rounded-full font-medium ${t.c}`}>{t.p}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-around px-2 py-2 bg-white border-t border-gray-200">
          {["Home", "Catálogo", "Chamados", "Perfil"].map((tab, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-3 h-3 rounded-md ${i === 0 ? "bg-[#00A3FF]" : "bg-gray-200"}`} />
              <span className={`text-[5px] ${i === 0 ? "text-[#00A3FF] font-bold" : "text-gray-400"}`}>{tab}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

{/* ===== APP MOBILE — Gestão de Equipes em Campo ===== */}
function AppFieldMockup() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-white">
        <div className="flex items-center justify-between px-3 py-1 bg-[#7C3AED]">
          <span className="text-[7px] text-white/70">9:41</span>
          <div className="w-3 h-1.5 border border-white/50 rounded-sm"><div className="w-2 h-full bg-white/70 rounded-sm" /></div>
        </div>
        <div className="px-3 pt-3 pb-2 bg-[#7C3AED]">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-white font-bold text-[10px]">Tarefas do Dia</span>
              <div className="text-[7px] text-purple-200 mt-0.5">Quinta, 27 Fev • 8 tarefas</div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-[8px]">🔔</span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="bg-white/15 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-white/90 rounded-full" style={{ width: "37%" }} />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[6px] text-purple-200">3 de 8 concluídas</span>
            <span className="text-[6px] text-white font-bold">37%</span>
          </div>
        </div>
        {/* Filter chips */}
        <div className="flex gap-1 px-3 py-2">
          {["Todas", "Pendentes", "Urgentes"].map((f, i) => (
            <span key={f} className={`text-[6px] px-2 py-0.5 rounded-full ${i === 0 ? "bg-[#7C3AED] text-white" : "bg-gray-100 text-gray-500"}`}>{f}</span>
          ))}
        </div>
        {/* Task list */}
        <div className="flex-1 px-3 space-y-1.5 overflow-hidden">
          {[
            { task: "Inspeção elétrica - Bloco A", time: "08:00 - 09:30", done: true, tag: "Inspeção" },
            { task: "Troca de filtros - Sala 204", time: "10:00 - 11:00", done: true, tag: "Manutenção" },
            { task: "Vistoria área externa", time: "11:30 - 12:00", done: true, tag: "Vistoria" },
            { task: "Reparo hidráulico - 3º andar", time: "14:00 - 16:00", done: false, tag: "Urgente" },
            { task: "Checklist de segurança mensal", time: "16:30 - 17:00", done: false, tag: "Checklist" },
          ].map((t, i) => (
            <div key={i} className={`rounded-lg p-2 border flex items-start gap-2 ${t.done ? "bg-gray-50 border-gray-100" : "bg-white border-gray-200 shadow-sm"}`}>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${t.done ? "border-emerald-500 bg-emerald-500" : "border-gray-300"}`}>
                {t.done && <span className="text-white text-[6px]">✓</span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[7px] font-semibold ${t.done ? "text-gray-400 line-through" : "text-[#0A1628]"}`}>{t.task}</div>
                <div className="text-[6px] text-gray-400 mt-0.5">{t.time}</div>
              </div>
              <span className={`text-[5px] px-1.5 py-0.5 rounded-full flex-shrink-0 ${t.tag === "Urgente" ? "bg-red-100 text-red-600" : t.done ? "bg-gray-100 text-gray-400" : "bg-purple-100 text-purple-600"}`}>{t.tag}</span>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div className="flex items-center justify-around px-2 py-2 bg-white border-t border-gray-200">
          {["Tarefas", "Mapa", "Relatório", "Perfil"].map((tab, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-3 h-3 rounded-md ${i === 0 ? "bg-[#7C3AED]" : "bg-gray-200"}`} />
              <span className={`text-[5px] ${i === 0 ? "text-[#7C3AED] font-bold" : "text-gray-400"}`}>{tab}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

{/* ===== DASHBOARD — Financeiro ===== */}
function DashboardFinanceMockup() {
  return (
    <BrowserFrame url="app.clienteconfidencial.io/dashboard">
      <div className="h-full flex text-[7px]">
        <div className="w-[22%] bg-[#0F172A] p-2 flex flex-col">
          <div className="flex items-center gap-1.5 mb-4 px-1">
            <div className="w-5 h-5 rounded-md bg-[#00A3FF] flex items-center justify-center"><span className="text-white font-bold text-[6px]">F</span></div>
            <div className="w-12 h-2 bg-white/80 rounded-sm" />
          </div>
          {["Dashboard", "Transações", "Contas", "Relatórios", "N. Fiscais", "Config."].map((item, i) => (
            <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md mb-0.5 ${i === 0 ? "bg-[#00A3FF]/20" : ""}`}>
              <div className={`w-2.5 h-2.5 rounded-sm ${i === 0 ? "bg-[#00A3FF]" : "bg-gray-600"}`} />
              <span className={`leading-none ${i === 0 ? "text-[#00A3FF]" : "text-gray-500"}`}>{item}</span>
            </div>
          ))}
          <div className="mt-auto flex items-center gap-1.5 px-1 pt-2 border-t border-white/10">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            <div><div className="w-10 h-1.5 bg-white/70 rounded-sm" /><div className="w-7 h-1 bg-gray-500 rounded-sm mt-0.5" /></div>
          </div>
        </div>
        <div className="flex-1 bg-[#F8FAFC] p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-1">
            <div><span className="text-[#0A1628] font-bold text-[9px]">Dashboard</span></div>
            <div className="flex items-center gap-1.5">
              <div className="px-2 py-1 bg-white rounded-md border border-gray-200 text-gray-400 text-[6px]">Jan - Fev 2026</div>
              <div className="px-2 py-1 bg-[#00A3FF] rounded-md text-white text-[6px]">Exportar</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { label: "Receita Total", value: "R$ 847.2k", change: "+12.5%", color: "text-emerald-500" },
              { label: "Despesas", value: "R$ 321.8k", change: "-3.2%", color: "text-emerald-500" },
              { label: "Lucro Líquido", value: "R$ 525.4k", change: "+18.7%", color: "text-emerald-500" },
              { label: "Contas a Receber", value: "R$ 156.3k", change: "23 pendentes", color: "text-amber-500" },
            ].map((kpi, i) => (
              <div key={i} className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
                <div className="text-gray-400 text-[6px] mb-1">{kpi.label}</div>
                <div className="text-[#0A1628] font-bold text-[9px] mb-0.5">{kpi.value}</div>
                <span className={`text-[5px] ${kpi.color}`}>{kpi.change}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-3 gap-1.5 min-h-0">
            <div className="col-span-2 bg-white rounded-lg p-2 border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#0A1628] font-semibold text-[7px]">Fluxo de Caixa</span>
                <div className="flex gap-2">
                  <div className="flex items-center gap-0.5"><div className="w-2 h-0.5 bg-[#00A3FF] rounded" /><span className="text-[5px] text-gray-400">Entrada</span></div>
                  <div className="flex items-center gap-0.5"><div className="w-2 h-0.5 bg-red-400 rounded" /><span className="text-[5px] text-gray-400">Saída</span></div>
                </div>
              </div>
              <div className="flex-1 flex items-end gap-[3px] pb-2">
                {[{ i: 65, o: 40 }, { i: 72, o: 35 }, { i: 58, o: 42 }, { i: 80, o: 38 }, { i: 75, o: 45 }, { i: 90, o: 40 }, { i: 85, o: 50 }, { i: 70, o: 35 }, { i: 78, o: 42 }, { i: 92, o: 48 }, { i: 88, o: 44 }, { i: 95, o: 46 }].map((b, i) => (
                  <div key={i} className="flex-1 flex gap-[1px] items-end h-full">
                    <div className="flex-1 bg-[#00A3FF]/80 rounded-t-sm" style={{ height: `${b.i}%` }} />
                    <div className="flex-1 bg-red-400/60 rounded-t-sm" style={{ height: `${b.o}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm flex flex-col">
              <span className="text-[#0A1628] font-semibold text-[7px] mb-1.5">Despesas</span>
              <div className="flex justify-center my-1">
                <div className="relative w-14 h-14">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="13" fill="none" stroke="#E2E8F0" strokeWidth="5" />
                    <circle cx="18" cy="18" r="13" fill="none" stroke="#00A3FF" strokeWidth="5" strokeDasharray="32 82" strokeLinecap="round" />
                    <circle cx="18" cy="18" r="13" fill="none" stroke="#8B5CF6" strokeWidth="5" strokeDasharray="20 82" strokeDashoffset="-32" strokeLinecap="round" />
                    <circle cx="18" cy="18" r="13" fill="none" stroke="#F59E0B" strokeWidth="5" strokeDasharray="15 82" strokeDashoffset="-52" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[8px] font-bold text-[#0A1628]">R$321k</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1 mt-auto">
                {[{ c: "bg-[#00A3FF]", l: "Pessoal", p: "39%" }, { c: "bg-purple-500", l: "Infra", p: "24%" }, { c: "bg-amber-500", l: "Marketing", p: "19%" }].map((it, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1"><div className={`w-1.5 h-1.5 rounded-sm ${it.c}`} /><span className="text-[6px] text-gray-500">{it.l}</span></div>
                    <span className="text-[6px] font-medium text-[#0A1628]">{it.p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

{/* ===== SISTEMA — Logística ===== */}
function SystemLogisticsMockup() {
  return (
    <BrowserFrame url="logistics.clienteconfidencial.io/operations">
      <div className="h-full flex text-[7px]">
        <div className="w-[20%] bg-[#0F172A] p-2 flex flex-col">
          <div className="flex items-center gap-1.5 mb-4 px-1">
            <div className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center"><span className="text-white font-bold text-[6px]">T</span></div>
            <div className="w-12 h-2 bg-white/80 rounded-sm" />
          </div>
          {["Operações", "Frotas", "Motoristas", "Rotas", "Alertas", "Relatórios"].map((item, i) => (
            <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md mb-0.5 ${i === 0 ? "bg-emerald-500/20" : ""}`}>
              <div className={`w-2.5 h-2.5 rounded-sm ${i === 0 ? "bg-emerald-500" : "bg-gray-600"}`} />
              <span className={`leading-none ${i === 0 ? "text-emerald-400" : "text-gray-500"}`}>{item}</span>
            </div>
          ))}
          <div className="mt-auto bg-red-500/10 border border-red-500/20 rounded-lg p-1.5">
            <div className="flex items-center gap-1 mb-0.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /><span className="text-red-400 text-[6px] font-bold">3 Alertas</span></div>
            <span className="text-[5px] text-red-300">2 atrasos, 1 desvio</span>
          </div>
        </div>
        <div className="flex-1 bg-[#F8FAFC] flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200">
            <span className="text-[#0A1628] font-bold text-[9px]">Operações em Tempo Real</span>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 rounded"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /><span className="text-[6px] text-emerald-600 font-medium">142 em rota</span></div>
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-amber-50 rounded"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /><span className="text-[6px] text-amber-600 font-medium">18 parados</span></div>
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 relative bg-[#E8F4F8] overflow-hidden">
              <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gray-300" />
              <div className="absolute top-[45%] left-0 right-0 h-[2px] bg-gray-400" />
              <div className="absolute top-[70%] left-0 right-0 h-[1px] bg-gray-300" />
              <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-gray-300" />
              <div className="absolute left-[55%] top-0 bottom-0 w-[2px] bg-gray-400" />
              <div className="absolute left-[80%] top-0 bottom-0 w-[1px] bg-gray-300" />
              <div className="absolute top-[8%] left-[10%] w-[12%] h-[10%] bg-gray-200 rounded-sm" />
              <div className="absolute top-[25%] left-[30%] w-[20%] h-[15%] bg-gray-200 rounded-sm" />
              <div className="absolute top-[55%] left-[8%] w-[15%] h-[12%] bg-gray-200 rounded-sm" />
              <div className="absolute top-[60%] left-[60%] w-[18%] h-[8%] bg-gray-200 rounded-sm" />
              {[{ t: "18%", l: "42%", c: "bg-emerald-500" }, { t: "38%", l: "68%", c: "bg-emerald-500" }, { t: "55%", l: "30%", c: "bg-emerald-500" }, { t: "72%", l: "75%", c: "bg-amber-500" }, { t: "30%", l: "15%", c: "bg-emerald-500" }, { t: "80%", l: "45%", c: "bg-red-500" }].map((pin, i) => (
                <div key={i} className="absolute" style={{ top: pin.t, left: pin.l }}>
                  <div className={`w-3 h-3 ${pin.c} rounded-full border-2 border-white shadow-md flex items-center justify-center`}><div className="w-1 h-1 bg-white rounded-full" /></div>
                </div>
              ))}
              <svg className="absolute inset-0 w-full h-full pointer-events-none"><path d="M 60 50 Q 100 80 120 100 T 180 120 T 220 90" fill="none" stroke="#00A3FF" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" /></svg>
            </div>
            <div className="w-[30%] bg-white border-l border-gray-200 p-2 flex flex-col">
              <span className="text-[7px] font-bold text-[#0A1628] mb-2">Veículos Ativos</span>
              <div className="flex-1 space-y-1 overflow-hidden">
                {[{ id: "FRT-001", d: "João S.", s: "Em rota", c: "bg-emerald-500" }, { id: "FRT-007", d: "Maria L.", s: "Em rota", c: "bg-emerald-500" }, { id: "FRT-012", d: "Pedro A.", s: "Parado", c: "bg-amber-500" }, { id: "FRT-003", d: "Ana C.", s: "Em rota", c: "bg-emerald-500" }, { id: "FRT-019", d: "Lucas R.", s: "Atrasado", c: "bg-red-500" }].map((v, i) => (
                  <div key={i} className="p-1.5 rounded-md border border-gray-100 bg-gray-50/50">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[7px] font-bold text-[#0A1628]">{v.id}</span>
                      <div className="flex items-center gap-0.5"><div className={`w-1.5 h-1.5 rounded-full ${v.c}`} /><span className="text-[5px] text-gray-500">{v.s}</span></div>
                    </div>
                    <span className="text-[6px] text-gray-400">{v.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const mockupComponents: Record<MockupVariant, React.FC> = {
  "site-law": SiteLawMockup,
  "site-health": SiteHealthMockup,
  "site-realestate": SiteRealEstateMockup,
  "landing-saas": LandingSaaSMockup,
  "landing-event": LandingEventMockup,
  "app-internal": AppInternalMockup,
  "app-field": AppFieldMockup,
  "dashboard-finance": DashboardFinanceMockup,
  "system-logistics": SystemLogisticsMockup,
};

export function ProjectMockup({ variant, className = "" }: ProjectMockupProps) {
  const MockupComponent = mockupComponents[variant];
  return (
    <div className={className}>
      <MockupComponent />
    </div>
  );
}
