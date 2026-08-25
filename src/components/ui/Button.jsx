export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className="rounded bg-[#1769ed] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0f55c7]">
      {children}
    </button>
  )
}
