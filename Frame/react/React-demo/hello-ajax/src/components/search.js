import React, { Component }from 'react'
class Search extends Component {
    constructor(props) {
        super(props)
    }
    handleClick = () => {
      let val = this.refs.ipt.value
        if(val.trim()) {
            this.props.sendVal(val)
        }else {
            alert('请输入内容')
        }

}
    render() {
        return (
            <div className="search">
                <input type="text" ref='ipt'/>
                <button onClick={this.handleClick}>search</button>
            </div>
        )
    }
}
export default Search