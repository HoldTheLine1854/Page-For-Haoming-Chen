//如果你看到了这里，就去群里喊小羊NB
import { MonitoringPanel } from './components/MonitoringPanel';
import './styles/globals.css';

export default function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center overflow-hidden relative">
      {/* 芝士背景，低饱和度 */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* 芝士主容器，比例16:9 */}
      <div className="relative w-[95vw] h-[53.4375vw] max-h-[95vh] max-w-[168.89vh] overflow-hidden"
           style={{
             background: 'radial-gradient(circle at center, rgba(0, 20, 40, 0.3), rgba(0, 10, 30, 0.5))'
           }}>
        {/* 芝士地图，占位 */}
        <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
          <p className="text-cyan-300/30 text-xl font-mono tracking-widest uppercase"
             style={{ 
               textShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
               fontFamily: 'monospace'
             }}>
              {/* 芝士 Map 占位（可替换） */}
            Map API Area
          </p>
        </div>

        {/* 芝士顶部标题栏，HUD 风格 */}
      <div className="absolute top-0 left-0 right-0 h-24 z-40 flex justify-center pointer-events-none">
        {/* 芝士标题线条SVG */}
        <svg className="absolute top-0 left-0 w-full h-full overflow-visible" viewBox="0 0 1920 100" preserveAspectRatio="none">
          <defs>
            <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 1)" />
              <stop offset="80%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
              {/* 芝士主线条 */}
          <path d="M 0 20 L 410 20 L 460 70 L 1460 70 L 1510 20 L 1920 20"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                filter="url(#glow-line)"
                className="opacity-80" />
                
              {/* 芝士装饰短线 */}
          <path d="M 420 30 L 455 65" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
          <path d="M 1500 30 L 1465 65" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
          
              {/* 芝士下方虚线装饰 */}
          <rect x="480" y="76" width="960" height="2" fill="rgba(6, 182, 212, 0.1)" rx="1" />
          <rect x="810" y="76" width="300" height="2" fill="rgba(6, 182, 212, 0.3)" rx="1" />
        </svg>

        <div className="relative mt-6 z-50">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-cyan-500 tracking-[0.2em] uppercase font-mono font-bold whitespace-nowrap"
              style={{ 
                textShadow: '0 0 30px rgba(6,182,212,0.5)',
                fontFamily: 'monospace'
              }}>
            ControlVista控制视界综合控制系统
          </h1>
        </div>
      </div>

      {/* 芝士左侧面板 */}
      <div className="absolute left-0 top-24 bottom-0 w-[15%] flex flex-col gap-0 z-20 pl-0">
        <MonitoringPanel
          title="光伏板电压"
          value={385.6}
          unit="V"
            status="正常"
            color="cyan"
            data={[
              { label: '当前电压', value: '385.6 V' },
              { label: '目标值', value: '400.0 V' },
              { label: '效率', value: '92.8%' },
              { label: '负载率', value: '96.4%' },
              { label: '发电功率', value: '12.5 kW' },
              { label: '', value: '' }
            ]}
          />
          <MonitoringPanel
            title="风机电压"
            value={412.8}
            unit="V"
            status="正常"
            color="cyan"
            data={[
              { label: '当前电压', value: '412.8 V' },
              { label: '目标值', value: '400.0 V' },
              { label: '效率', value: '88.5%' },
              { label: '负载率', value: '103.2%' },
              { label: '发电功率', value: '15.8 kW' },
              { label: '', value: '' }
            ]}
          />
        </div>

        {/* 芝士右侧面板 */}
        <div className="absolute right-0 top-24 bottom-0 w-[15%] flex flex-col gap-0 z-20 pr-0">
          <MonitoringPanel
            title="三相电压"
            value={380.2}
            unit="V"
            status="正常"
            color="cyan"
            data={[
              { label: 'A相电压', value: '220.1 V' },
              { label: 'B相电压', value: '219.8 V' },
              { label: 'C相电压', value: '220.3 V' },
              { label: '平衡度', value: '99.7%' },
              { label: '总功率', value: '28.3 kW' },
              { label: '', value: '' }
            ]}
          />
          <MonitoringPanel
            title="低压电压"
            value={220.5}
            unit="V"
            status="正常"
            color="cyan"
            data={[
              { label: '当前电压', value: '220.5 V' },
              { label: '额定电压', value: '220.0 V' },
              { label: '电流', value: '45.2 A' },
              { label: '温度', value: '38.5°C' },
              { label: '功率', value: '9.96 kW' },
              { label: '', value: '' }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
