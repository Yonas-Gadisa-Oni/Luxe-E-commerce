import Spinner from '../ui/Spinner'

export default function LoadingState() {
  return (
    <div className="loading-state">
      <Spinner />
      <p>Loading data...</p>
    </div>
  )
}
