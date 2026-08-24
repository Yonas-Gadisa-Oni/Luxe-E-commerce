export default function EmptyState({ message = 'No results found.' }) {
  return <div className="empty-state">{message}</div>
}
