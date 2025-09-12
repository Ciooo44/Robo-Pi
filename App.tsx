import { useState } from 'react';
import { findPort, type RobotConnection, calibrate } from '@robopi/web';
import DeviceCard from './components/DeviceCard';
import TeleopPanel from './components/TeleopPanel';
import Log from './components/Log';

export default function App() {
  const [robots, setRobots] = useState<RobotConnection[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const push = (m:string)=> setLog(l => [m, ...l].slice(0,200));

  async function addUnit() {
    const res = await findPort({ onMessage: push });
    setRobots(prev => [...prev, ...res]);
  }

  async function doCalibrate(r: RobotConnection) {
    const result = await calibrate(r, { onProgress: push, onLiveUpdate: () => {} });
    push('Ranges: ' + JSON.stringify(result.joints));
  }

  return (
    <div style={{padding:24}}>
      <h1 style={{color:'#ffa200'}}>DASHBOARD</h1>
      <div className="card" style={{margin:'12px 0'}}>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <strong>Device Registry</strong>
          <button className="btn" onClick={addUnit}>+ Add Unit</button>
        </div>
        {robots.length === 0 && <div style={{marginTop:8, opacity:.8}}>No units detected</div>}
        <div className="grid" style={{marginTop:12}}>
          {robots.map(r => (
            <div key={r.info.id}>
              <DeviceCard r={r} />
              <div style={{display:'flex', gap:8, marginTop:8}}>
                <button className="btn" onClick={() => doCalibrate(r)}>Calibrate</button>
                <button className="btn" onClick={() => r.close()}>Disconnect</button>
              </div>
              <div style={{marginTop:8}}>
                <TeleopPanel robot={r} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 style={{marginTop:24}}>Logs</h3>
      <Log lines={log} />
    </div>
  );
}
