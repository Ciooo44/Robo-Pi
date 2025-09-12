export default function Log({ lines }: { lines: string[] }) {
  return <div className="log">{lines.join('\n')}</div>;
}
