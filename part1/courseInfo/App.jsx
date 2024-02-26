import React from "react"

const Header = (props) =>{
  console.log(props)
  return(
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.title}{props.exercise}</p>
    </div>
  )

}

const Content = (props) =>{
  console.log(props)
  return(
    <div>
      <Part title = {props.contents[0].title} exercise= {props.contents[0].exercise}/>
      <Part title = {props.contents[1].title} exercise= {props.contents[1].exercise} />
      <Part title = {props.contents[2].title} exercise= {props.contents[2].exercise}/>
    </div>
  )
}

const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.contents[0].exercise + props.contents[1].exercise + props.contents[2].exercise} </p>
    </div>
  )

}

const App = () => {
  const course= {
    header : 'Half Stack application development',
    contents : [
      {title : 'Fundamentals of React    ', exercise: 10},
      {title : 'Using props to pass data    ', exercise :7},
      {title : 'State of a component    ', exercise: 14},
    ]
}
  console.log('Running App')

  return (
    <div>
      <Header course={course.header}/>
      <Content contents={course.contents}/>
      <Total contents={course.contents} />
    </div>
  )
}

export default App




/* NOTES 

/* JSX 
const App = () => {
  const now = new Date()
  const a = 20
  const b = 11
  console.log(now, a+b)

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, ' hi bitch ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a+b
    )


  )
}
*/

//multiple components and props
/*const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>

      <Hello name='lil bitch' age={70-32}/>
      <Hello name= {name} age= {age}/>
      
    </>
  )
}
*/

//DO NOT RENDER OBJECTS
// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },

//   ]

//   /*Objects are not valid as a React child!!!!!!!!!!!!!!!!
//    * this causes a problem because the item to be rendered
//    * in the braces is an object.
//    */
//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name}{friends[1].age}</p>
//     </div>
//   )
// }
