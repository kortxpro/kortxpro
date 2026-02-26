export type MockupVariant = "ecommerce" | "system" | "app" | "dashboard";

interface ProjectMockupProps {
  variant: MockupVariant;
  className?: string;
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-2">
          <div className="h-4 bg-white rounded-md border border-gray-200 max-w-[60%] mx-auto" />
        </div>
      </div>
      {/* Content */}
      <div className="p-3 bg-gray-50 aspect-[16/10] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-[180px] sm:w-[200px] rounded-[24px] overflow-hidden border-[3px] border-gray-800 bg-white shadow-lg">
        {/* Notch */}
        <div className="flex justify-center bg-gray-800 pt-1 pb-1">
          <div className="w-16 h-3 bg-gray-900 rounded-b-xl" />
        </div>
        {/* Screen */}
        <div className="bg-gray-50 aspect-[9/16] overflow-hidden">
          {children}
        </div>
        {/* Bottom bar */}
        <div className="flex justify-center bg-gray-800 py-1.5">
          <div className="w-10 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <BrowserFrame>
      <div className="h-full flex flex-col text-[6px] sm:text-[7px]">
        {/* Navbar */}
        <div className="flex items-center justify-between px-2 py-1.5 bg-[#0A1628]">
          <div className="w-8 h-2 bg-[#00A3FF] rounded-sm" />
          <div className="flex gap-2">
            <div className="w-5 h-1.5 bg-gray-500 rounded-sm" />
            <div className="w-5 h-1.5 bg-gray-500 rounded-sm" />
            <div className="w-5 h-1.5 bg-gray-500 rounded-sm" />
          </div>
          <div className="w-4 h-3 bg-[#00A3FF]/30 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 border border-[#00A3FF] rounded-sm" />
          </div>
        </div>

        {/* Hero banner */}
        <div className="mx-2 mt-2 px-3 py-2 rounded bg-gradient-to-r from-[#0A1628] to-[#00A3FF]/40">
          <div className="w-16 h-1.5 bg-white/80 rounded-sm mb-1" />
          <div className="w-12 h-1 bg-white/50 rounded-sm mb-1.5" />
          <div className="w-8 h-2 bg-[#00A3FF] rounded-sm" />
        </div>

        {/* Product grid */}
        <div className="flex-1 px-2 mt-2">
          <div className="grid grid-cols-3 gap-1.5">
            {[
              "from-blue-400 to-blue-600",
              "from-purple-400 to-purple-600",
              "from-emerald-400 to-emerald-600",
              "from-orange-400 to-orange-600",
              "from-pink-400 to-pink-600",
              "from-cyan-400 to-cyan-600",
            ].map((gradient, i) => (
              <div key={i} className="bg-white rounded shadow-sm p-1">
                <div
                  className={`aspect-square rounded-sm bg-gradient-to-br ${gradient} mb-1`}
                />
                <div className="w-full h-1 bg-gray-200 rounded-sm mb-0.5" />
                <div className="w-1/2 h-1 bg-[#00A3FF]/60 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function SystemMockup() {
  return (
    <BrowserFrame>
      <div className="h-full flex text-[6px] sm:text-[7px]">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#0A1628] p-1.5 flex flex-col gap-1">
          <div className="w-8 h-2 bg-[#00A3FF] rounded-sm mb-2" />
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`flex items-center gap-1 px-1 py-0.5 rounded-sm ${
                i === 0 ? "bg-[#00A3FF]/20" : ""
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-sm ${
                  i === 0 ? "bg-[#00A3FF]" : "bg-gray-600"
                }`}
              />
              <div
                className={`flex-1 h-1 rounded-sm ${
                  i === 0 ? "bg-[#00A3FF]/60" : "bg-gray-600"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex-1 p-2 flex flex-col">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-1.5 mb-2">
            {["bg-blue-500", "bg-emerald-500", "bg-purple-500"].map(
              (color, i) => (
                <div key={i} className="bg-white rounded shadow-sm p-1.5">
                  <div className={`w-3 h-3 ${color}/20 rounded-sm mb-1`} />
                  <div className={`w-6 h-1.5 ${color} rounded-sm mb-0.5`} />
                  <div className="w-full h-1 bg-gray-200 rounded-sm" />
                </div>
              )
            )}
          </div>

          {/* Table */}
          <div className="flex-1 bg-white rounded shadow-sm p-1.5">
            <div className="flex gap-1 mb-1 pb-1 border-b border-gray-200">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex-1 h-1 bg-gray-300 rounded-sm" />
              ))}
            </div>
            {[...Array(5)].map((_, row) => (
              <div
                key={row}
                className="flex gap-1 py-0.5 border-b border-gray-100"
              >
                {[...Array(4)].map((_, col) => (
                  <div
                    key={col}
                    className={`flex-1 h-1 rounded-sm ${
                      col === 3
                        ? row % 2 === 0
                          ? "bg-emerald-300"
                          : "bg-amber-300"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function AppMockup() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col text-[5px] sm:text-[6px]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-2 py-1 bg-[#0A1628]">
          <div className="w-4 h-1 bg-white/60 rounded-sm" />
          <div className="flex gap-1">
            <div className="w-2 h-1 bg-white/60 rounded-sm" />
            <div className="w-2 h-1 bg-white/60 rounded-sm" />
          </div>
        </div>

        {/* App header */}
        <div className="px-2 py-2 bg-[#0A1628]">
          <div className="w-12 h-1.5 bg-white rounded-sm mb-1" />
          <div className="w-16 h-1 bg-white/50 rounded-sm" />
        </div>

        {/* Search bar */}
        <div className="px-2 py-1.5">
          <div className="h-3 bg-gray-200 rounded-full" />
        </div>

        {/* Category pills */}
        <div className="flex gap-1 px-2 mb-2">
          <div className="px-2 py-0.5 bg-[#00A3FF] rounded-full">
            <div className="w-3 h-1 bg-white/80 rounded-sm" />
          </div>
          <div className="px-2 py-0.5 bg-gray-200 rounded-full">
            <div className="w-4 h-1 bg-gray-400 rounded-sm" />
          </div>
          <div className="px-2 py-0.5 bg-gray-200 rounded-full">
            <div className="w-3 h-1 bg-gray-400 rounded-sm" />
          </div>
        </div>

        {/* List items */}
        <div className="flex-1 px-2 space-y-1.5">
          {[
            "from-orange-400 to-red-400",
            "from-green-400 to-emerald-500",
            "from-blue-400 to-indigo-500",
            "from-pink-400 to-rose-500",
          ].map((gradient, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-white rounded-lg shadow-sm p-1.5"
            >
              <div
                className={`w-6 h-6 rounded-lg bg-gradient-to-br ${gradient} flex-shrink-0`}
              />
              <div className="flex-1">
                <div className="w-10 h-1 bg-gray-700 rounded-sm mb-0.5" />
                <div className="w-14 h-1 bg-gray-300 rounded-sm mb-0.5" />
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                  <div className="w-4 h-1 bg-gray-300 rounded-sm" />
                </div>
              </div>
              <div className="text-right">
                <div className="w-5 h-1.5 bg-[#00A3FF] rounded-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around px-2 py-2 bg-white border-t border-gray-200">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div
                className={`w-2.5 h-2.5 rounded-sm ${
                  i === 0 ? "bg-[#00A3FF]" : "bg-gray-300"
                }`}
              />
              <div
                className={`w-3 h-0.5 rounded-sm ${
                  i === 0 ? "bg-[#00A3FF]" : "bg-gray-300"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function DashboardMockup() {
  return (
    <BrowserFrame>
      <div className="h-full flex flex-col text-[6px] sm:text-[7px]">
        {/* Top nav */}
        <div className="flex items-center justify-between px-2 py-1.5 bg-[#0A1628]">
          <div className="w-8 h-2 bg-[#00A3FF] rounded-sm" />
          <div className="flex gap-2 items-center">
            <div className="w-5 h-1.5 bg-gray-500 rounded-sm" />
            <div className="w-5 h-1.5 bg-gray-500 rounded-sm" />
            <div className="w-3 h-3 bg-gray-600 rounded-full" />
          </div>
        </div>

        <div className="flex-1 p-2 flex flex-col gap-2">
          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { color: "bg-blue-500", value: "w-8" },
              { color: "bg-emerald-500", value: "w-6" },
              { color: "bg-purple-500", value: "w-10" },
              { color: "bg-orange-500", value: "w-7" },
            ].map((kpi, i) => (
              <div key={i} className="bg-white rounded shadow-sm p-1.5">
                <div className="w-full h-1 bg-gray-200 rounded-sm mb-1" />
                <div
                  className={`${kpi.value} h-2 ${kpi.color} rounded-sm mb-0.5`}
                />
                <div className={`w-4 h-0.5 ${kpi.color}/30 rounded-sm`} />
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="flex-1 grid grid-cols-3 gap-1.5">
            {/* Bar chart */}
            <div className="col-span-2 bg-white rounded shadow-sm p-1.5">
              <div className="w-8 h-1 bg-gray-300 rounded-sm mb-2" />
              <div className="flex items-end gap-1 h-[60%]">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 65].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#00A3FF] to-[#00A3FF]/40 rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Donut chart */}
            <div className="bg-white rounded shadow-sm p-1.5 flex flex-col items-center justify-center">
              <div className="w-8 h-1 bg-gray-300 rounded-sm mb-2 self-start" />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="4"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#00A3FF"
                    strokeWidth="4"
                    strokeDasharray="44 88"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="4"
                    strokeDasharray="22 88"
                    strokeDashoffset="-44"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeDasharray="16 88"
                    strokeDashoffset="-66"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-1.5 bg-gray-700 rounded-sm" />
                </div>
              </div>
              {/* Legend */}
              <div className="flex gap-1.5 mt-1.5">
                <div className="flex items-center gap-0.5">
                  <div className="w-1.5 h-1.5 bg-[#00A3FF] rounded-full" />
                  <div className="w-3 h-0.5 bg-gray-300 rounded-sm" />
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  <div className="w-3 h-0.5 bg-gray-300 rounded-sm" />
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <div className="w-3 h-0.5 bg-gray-300 rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const mockupComponents: Record<MockupVariant, React.FC> = {
  ecommerce: EcommerceMockup,
  system: SystemMockup,
  app: AppMockup,
  dashboard: DashboardMockup,
};

export function ProjectMockup({ variant, className = "" }: ProjectMockupProps) {
  const MockupComponent = mockupComponents[variant];
  return (
    <div className={className}>
      <MockupComponent />
    </div>
  );
}
