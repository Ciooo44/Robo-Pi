import { useMemo, useState } from 'react';
import { teleoperate } from '@robopi/web';
import type { RobotConnection } from '@robopi/web';

const JOINTS = ['j0','j1','j2','j3','j4','j5'];

export default function TeleopPanel({ robot }: { robot: RobotConnection }) {
  const [state, setState] = useState({} as any);
  const teleop = useMemo(() => teleoperate(robot, { onStateUpdate: s => setState({ ...s }) }), [robot]);

  return (
    <div className="card">
      <div style={{display:'flex', gap:8}}>
        <button className="btn" onClick={() => teleop.start()}>Start</button>
        <button className="btn" onClick={() => teleop.stop()}>Stop</button>
      </div>
      <div style={{marginTop:12}} className="grid">
        {JOINTS.map(j => (
          <div key={j}>
            <div className="label">{j}</div>
            <input className="slider" type="range" min="-90" max="90" step="1" defaultValue={0}
              onChange={e => teleop.setJoint(j, Number(e.currentTarget.value))} />
          </div>
        ))}
      </div>
      <pre style={{marginTop:12}}>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
