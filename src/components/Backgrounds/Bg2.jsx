export default function Bg2({ children }) {
  return (
    <div className="w-full overflow-hidden">
      {/* Camada de Background (fica atrás) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#6B0F9C] opacity-20 blur-[50px]"></div>
        <div className="absolute bottom-[50%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#A4DE02] opacity-20 blur-[50px]"></div>
        <div className="absolute bottom-[15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#A4DE02] opacity-20 blur-[50px]"></div>
      </div>

      {/* Camada de Conteúdo (fica à frente) */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}