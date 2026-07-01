
import './App.css'
import Home from './components/Home.jsx'
import Body from './components/Body.jsx'
import { Toaster } from 'react-hot-toast';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      {/* <Home/> */}
      <Body/>
      <Toaster/>
     </div>
    </>
  )
}

export default App
