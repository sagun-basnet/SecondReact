// import Form from "./components/form/Form"
import { useState } from "react"
import Card from "./components/Card"
import Login from "./components/form/Login"
import Register from "./components/form/Register"
import Navbar from "./components/global/Navbar"
import Product from "./components/Product"
const App = () => {

  const [count, setCount] = useState(true);

  // let count = 0;

  const handleClick = () => {
    setCount(!count);
    count ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
    console.log(count);
  }

  return (
    <>
      {/* <Navbar /> */}

      {/* <Product /> */}

      <div className="w-full h-[100vh] flex items-center gap-4 justify-center">
        <button onClick={handleClick} className="p-2 px-4 bg-blue-500 rounded-md">{count ? "ON" : "OFF"}</button>
      </div>

    </>
  )
}

export default App
