import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto max-w-2xl p-6">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 active:scale-95"
          >
            clicked {count} times
          </button>
    </main>
  )
}
