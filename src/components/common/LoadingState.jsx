import Spinner from '../ui/Spinner'

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-10 text-sm text-slate-500">
      <Spinner />
      <p>Loading data...</p>
    </div>
  )
}
