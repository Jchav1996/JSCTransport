import { useState } from 'react'

export function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          HELLLLLEERRRR ! Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        HELLLLEEERRRRR Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
