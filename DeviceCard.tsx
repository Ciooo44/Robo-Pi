import { RobotConnection } from '@robopi/web';

export default function DeviceCard({ r }: { r: RobotConnection }) {
  return (
    <div className="card">
      <div className="label">ID</div>
      <div>{r.info.id}</div>
      <div className="label" style={{marginTop:8}}>Model</div>
      <div>{r.info.model}</div>
    </div>
    
  );
}
