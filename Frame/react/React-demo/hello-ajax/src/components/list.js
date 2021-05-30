import React, { Component }from 'react'
import axios from 'axios'
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstView: true,
            loading: false,
            users: null,
            error: null
        }
    }
    componentWillReceiveProps(nextprops) {
        let val = nextprops.iptVal
        let url = 'https://api.github.com/search/users?q='+val
        this.setState({
            firstView: false,
            loading: true
        })
        axios.get(url).then(res => {
            this.setState({
                loading: false,
                users: res.data.items
            })

        })
            .catch(error => {
                this.setState({
                    loading: false,
                    error
                })
            })
    }
    render() {
        let {firstView, loading, users} = this.state
       if(firstView) {
           return <h2>enable to search</h2>
       }else if(loading) {
           return <h2>loading....</h2>
       }else if(users) {
           return (
               <div className="items">
                   <ul>
                       {
                           users.map((item,index) => {
                               return (
                                   <li key={index}>
                                       <a href={item.html_url}>
                                           <img
                                               src={item.avatar_url}
                                               alt="" />
                                       </a>
                                       <span>{item.login}</span>
                                   </li>
                               )
                           })
                       }
                   </ul>
               </div>
           )
       }else {
           return <p>找不到搜索内容，请重新输入</p>
       }
    }
}
export default List