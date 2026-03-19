import './App.css'
import Todo from './todo.jsx'
import Actor from './actor.jsx'
function App() {
  const actors = [
    {nayok: "shakib khan", naika: "aishwarya rai", sinema: "king khan"},
    {nayok: "imran khan", naika: "sara alam", sinema: "dilwale"},
    {nayok: "salman khan", naika: "katrina kaif", sinema: "tiger zinda hai"}
  ]
  return (
    <>
      <MySelf></MySelf>
      
      {
        actors.map(actor => <Actor actor ={actor}></Actor>)
      }



      <Person name="ashikur rahman" age={24}></Person>
      <Todo task="learn react" status="pending" done={false}></Todo>
      <Todo task="learn react" status="done" done={true}></Todo>
      <Todo task="learn react" status="75% done" done={false}></Todo>
      <Todo task="learn react" status="done" done={true}></Todo>
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
