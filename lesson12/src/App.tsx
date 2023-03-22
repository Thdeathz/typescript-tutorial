import React, { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
import { Section } from "./components/section"

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title="Hello" />
      <Section title="Section title">
        This is my section
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List 
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} 
        render={(item: string) => 
          <span className="gold">{item}</span>
        }
      />
    </>
  )
}

export default App
