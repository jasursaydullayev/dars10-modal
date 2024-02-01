import { useRef, useState } from "react"
import Modal from "./components/Modal"
function App() {
  const [open, setOpen] = useState(false)
  const handle = () => {
    setOpen(true)
  }
  return (
    <div className="App">
    <Modal open={open} onClose={() => setOpen(false)} />
    <div>
      <button onClick={handle} className="modalBtn">Modal</button>
    </div>
    </div>
  )
}

export default App