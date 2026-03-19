import './App.css'

function App() {
  
  return (
    <>
      <MySelf></MySelf>
      <Person name="ashikur rahman" age={24}></Person>
    </>
  )
}
function MySelf(){
  return(

    <div>
      <h1>My name is Vite</h1>
      <p>I am a build tool that aims to provide a faster and leaner development experience for modern web projects.</p>
    </div>

    

  )
}

function Person({name, age}){
  return(
    <div className ="card">
      <p>name : {name}</p>
      <p>age : {age}</p>
    </div>
  )
}

export default App
