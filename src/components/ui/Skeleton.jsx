export default function Skeleton({ width = '100%', height = '1rem' }) {
  return <div className="animate-pulse rounded bg-slate-200" style={{ width, height }} aria-hidden="true" />
}
