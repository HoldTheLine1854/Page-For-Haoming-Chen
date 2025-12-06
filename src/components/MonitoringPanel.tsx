

interface DataItem {
  label: string;
  value: string;
}

interface MonitoringPanelProps {
  title: string;
  value: number;
  unit: string;
  status: string;
  color: 'cyan' | 'blue' | 'emerald' | 'violet';
  data: DataItem[];
}

const colorClasses = {
  cyan: {
    text: 'text-cyan-300',
    valueText: 'text-cyan-100',
    glow: 'rgba(6, 182, 212, 0.6)',
    glowLight: 'rgba(6, 182, 212, 0.3)'
  },
  blue: {
    text: 'text-blue-300',
    valueText: 'text-blue-100',
    glow: 'rgba(59, 130, 246, 0.6)',
    glowLight: 'rgba(59, 130, 246, 0.3)'
  },
  emerald: {
    text: 'text-emerald-300',
    valueText: 'text-emerald-100',
    glow: 'rgba(16, 185, 129, 0.6)',
    glowLight: 'rgba(16, 185, 129, 0.3)'
  },
  violet: {
    text: 'text-violet-300',
    valueText: 'text-violet-100',
    glow: 'rgba(139, 92, 246, 0.6)',
    glowLight: 'rgba(139, 92, 246, 0.3)'
  }
};

export function MonitoringPanel({ title, value, unit, status, color, data }: MonitoringPanelProps) {
  const colors = colorClasses[color];

  return (
    <div className="flex-1 relative group"
         style={{
           backdropFilter: 'blur(12px) saturate(120%)',
           WebkitBackdropFilter: 'blur(12px) saturate(120%)',
           background: `linear-gradient(180deg, rgba(0, 10, 30, 0.2), rgba(0, 10, 30, 0.05))`,
           borderBottom: `1px solid rgba(255,255,255,0.05)`
         }}>
      
      {/* 悬浮高亮效果 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{
             background: `radial-gradient(circle at center, ${colors.glowLight} 0%, transparent 70%)`,
             opacity: 0.05
           }}></div>

      {/* 标题栏 - HUD 风格 - 紧凑 */}
      <div className="px-2 py-1 flex items-center justify-between">
        <h3 className={`${colors.text} tracking-widest uppercase text-[9px] font-mono`}
            style={{ 
              textShadow: `0 0 10px ${colors.glow}, 0 0 20px ${colors.glowLight}`,
              fontFamily: 'monospace'
            }}>
          {title}
        </h3>
        <span className="text-green-300 text-[8px] px-1.5 py-0.5 font-mono tracking-wide"
              style={{ 
                textShadow: '0 0 8px rgba(34, 197, 94, 0.8)',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                fontFamily: 'monospace'
              }}>
          {status}
        </span>
      </div>

      {/* 分隔线 - 荧光效果 */}
      <div className="h-px mx-2 mb-2"
           style={{
             background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
             boxShadow: `0 0 4px ${colors.glow}`
           }}></div>

      {/* 主要数据显示 - HUD 风格 - 紧凑 */}
      <div className="px-2 pb-2 flex items-baseline gap-1.5">
        <div className={`text-2xl ${colors.valueText} font-mono tracking-tight`}
             style={{ 
               textShadow: `0 0 20px ${colors.glow}, 0 0 40px ${colors.glowLight}`,
               fontFamily: 'monospace',
               fontVariantNumeric: 'tabular-nums'
             }}>
          {value.toFixed(1)}
        </div>
        <div className={`text-[10px] ${colors.text} font-mono`}
             style={{ 
               textShadow: `0 0 8px ${colors.glowLight}`,
               fontFamily: 'monospace'
             }}>
          {unit}
        </div>
      </div>

      {/* 详细数据 - 单列布局 HUD 风格 - 紧凑且优化宽度 */}
      <div className="px-2 pb-2 grid grid-cols-1 gap-y-1.5">
        {data.map((item, index) => {
          // 跳过空项
          if (!item.label && !item.value) return null;
          
          return (
            <div key={index} 
                 className="flex items-center justify-between border-b border-white/5 last:border-0"
                 style={{
                   backgroundColor: 'rgba(0, 20, 40, 0.2)',
                   padding: '4px 4px'
                 }}>
              <span className="text-slate-400/90 text-[9px] uppercase tracking-wide font-mono"
                    style={{ fontFamily: 'monospace' }}>
                {item.label}
              </span>
              <span className={`${colors.text} text-[10px] font-mono tracking-wide text-right`}
                    style={{ 
                      textShadow: `0 0 8px ${colors.glowLight}`,
                      fontFamily: 'monospace',
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                {item.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* 底部荧光线 */}
      <div className="h-px"
           style={{
             background: `linear-gradient(90deg, transparent, ${colors.glow} 50%, transparent)`,
             boxShadow: `0 0 6px ${colors.glow}`
           }}></div>
    </div>
  );
}
