import { CounterProvider } from './context/ConterContext'
import Counter from './Counter'

function App() {
  return (
    <>
      <CounterProvider>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  )
}

export default App
