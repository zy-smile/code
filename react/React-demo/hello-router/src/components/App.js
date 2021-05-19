import React from 'react'
import { NavLink,HashRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import About from './about'
import Detail from './detail'
import Home from './Home'
import NotFound from './NotFound'
import '../css/index.css'
class App extends React.Component {
    render() {
        return (
           <Router>
               <div>
                    <h3>App根组件</h3>
                    <NavLink to="/" activeClassName="selected">home</NavLink><br/>
                  <NavLink to="/about" activeClassName="selected">about</NavLink>
                    <br></br>
                    <NavLink to="/detail" activeClassName="selected">detail</NavLink>
                    <Switch>
                        {/* exact： 精准匹配 */}
                    <Route exact path="/" component={Home}></Route>
                    <Route path='/about' component={About}/>
                    <Route path='/detail' component={Detail}/>
                    {/* 1.错误匹配
                    <Route component={NotFound}></Route> */}
                    <Route path="/notfound" component={NotFound}></Route>
                    {/* 路由重定向 */}
                    <Redirect from="*" to="/notfound"></Redirect>
                    </Switch>
                    
            </div>
           </Router>
        )
    }
}
export default App