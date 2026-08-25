export default function EmptyState({ message = 'No results found.' }) {
  return <div className="p-10 text-center text-sm text-slate-500">{message}</div>
}
