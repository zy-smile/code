import React, { Component }from 'react'
import Search from './search'
import List from './list'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iptVal: ''
        }
    }
    sendVal = (iptVal) => {
        this.setState({
            iptVal
        })
    }
    render() {
        let {iptVal} = this.state
        return (
            <div>
                <Search sendVal={this.sendVal}/>
                <List iptVal={iptVal}/>
            </div>
        )
    }
}
export default App