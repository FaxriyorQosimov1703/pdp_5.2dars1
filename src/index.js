import React, { Component } from 'react'
import reactDom from 'react-dom';
import App from './App'

// export default class Index extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

reactDom.render(
    <App />,
    document.getElementById('root')
)
