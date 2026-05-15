import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'

function App() {

  return (
    <div className="App">
      <h1>Student Information</h1>
      <div className="container">
        <Student name="Subham Singh"course="Mathematics" marks={98} />
        <Student name="Divya Pandey" course="Information Technology" marks={88} />
        <Student name="Mayank Chaudhary" course="Data Structure" marks={92} />
      </div>
    </div>
  );
}
export default App;