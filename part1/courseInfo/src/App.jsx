import React from "react"
import { useState } from "react"


//DESTRUCTURING
// const Hello = ({name, age} ) => {
//   const bornYear = () => new Date().getFullYear()- age
//  return (
//   <div>
//     <p>
//       Hello {name}, you are {age} years old
//     </p>
//     <p>So you were probably born in {bornYear()}</p>
//   </div>
// )
// }


// const Display = ({counter}) => <div>{counter}</div>
 //const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

/*renders completely different React elements depending on the state of the application*/
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
const App = () => {

//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   //every click is stored in a separate piece of state called allClicks
//   const [allClicks, setAll] = useState([])
//   // track of the total number of button presses in the state total
//   const [total, setTotal] = useState(0)
  

//   // const handleClick = () => {
//   //   console.log('clicked')
//   // }
// //statefule componanents
//   // setTimeout(
//   //   () => setCounter(),
//   //   1000)


//   // const increaseByOne = () => {
//   //   console.log('increasing, value before', counter)
//   //   setCounter(counter + 1)
//   // }

//   // const decreaseByOne = () => { 
//   //   console.log('decreasing, value before', counter)
//   //   setCounter(counter - 1)
//   // }

//   // const setToZero = () => {
//   //   console.log('resetting to zero, value before', counter)
//   //   setCounter(0)
//   // }

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight= right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }
 

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text= 'left'/>
//       <Button onClick={handleRightClick} text= 'right'/>
//       {right}
//       <History allClicks={allClicks} />
//       <p>total is {total}</p>
//     </div>
//   )
// }

const [value, setValue] = useState(10)
// const handleClick = () => {
//   console.log('clicked the button, reset to 0')
//   setValue(0)
// }

//function that return a function
const setToValue = (newValue)  => {
  console.log('value now', newValue)  // print the new value to console
  setValue(newValue)
}

  return (
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />

      {/* infinite recursion because setValue(0) is executed immediately during the rendering phase <button onClick={setValue(0)}>button</button> */}
    </div>
  )
}

export default App
