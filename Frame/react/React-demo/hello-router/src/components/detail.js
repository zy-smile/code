import React, { Component }from 'react'
import { NavLink,Route } from 'react-router-dom'
import News from './News'
class Detail extends Component {
   
    render() {
        return (
            <div>
                    <h3>Detail组件</h3>
                    <ul>
                       <li><NavLink to="/detail/news/1">detail1</NavLink></li> 
                       <li><NavLink to="/detail/news/2">detail2</NavLink></li> 
                       <li><NavLink to="/detail/news/3">detail3</NavLink></li>  
                    </ul>
                    
                    <Route path="/detail/news/:id" component={News}></Route>
            </div>
        )
    }
}
export default Detail