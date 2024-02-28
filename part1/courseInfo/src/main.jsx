import ReactDOM from 'react-dom/client'

import App from './App'

//CALLS TO RENDER METHOD NOT RECOMMENDED
//let counter = 1
//const refresh = () =>{
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)//}

// setInterval(() => {
//     refresh()
//     counter += 1
//     } , 5000)