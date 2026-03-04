import './App.css'
import { useEffect, useRef } from "react"
//more elegent useSocket use
export default function App() {
  const socketRef = useRef(null)
  const inputRef = useRef(null);

  function sendMessage() {
    if (!socketRef) {
      return;
    }
    //@ts-ignore
    let message: String = inputRef.current.value
    console.log(message)
    //@ts-ignore
    socketRef.current.send(message)
  }
  
  useEffect(() => {
    //here define websocket client: cause we want to call it once .
    const ws = new WebSocket("ws://localhost:8000")
    //@ts-ignore
    socketRef.current = ws
    
    ws.onmessage = (ev) => { //that's how we recieve 
      alert(ev.data)
    }
  }, []);



  return (
    <>
      <input ref={inputRef} type="text" placeholder='Message ...'></input>
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

