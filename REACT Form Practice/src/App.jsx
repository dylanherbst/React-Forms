import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from '../login-in Form Folder/login form(parent)'
import MoviesList from '../Lists Folder/Movie List'
import DisplayCats from '../../CATS FOLDER/displayCats'
import CatManager from '../../CATS FOLDER/catManager'
import ExplodingBomb from './errorBomb'
import CalcManager from '../CALCULATOR FOLDER/calc Manager'
import EcomManager from '../../ECOM FOLDER/Ecom manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <LoginForm />
<MoviesList></MoviesList> */}
{/* <DisplayCats></DisplayCats> */}
{/* <CatManager></CatManager>
<ExplodingBomb></ExplodingBomb> */}



<CalcManager></CalcManager>
<br></br>
<br></br>

<EcomManager></EcomManager>




    </>
  )
}

export default App
