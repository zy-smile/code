import React from 'react'
class News extends React.Component {
  clickHandle = () => {
    // 编程式导航
    this.props.history.push({pathname: '/about', state: {info: this.props.location.pathname}})
}
  render() {
    return (
      <div>
        <p>news组件{this.props.match.params.id}</p>
        <button onClick={this.clickHandle}>点击返回首页</button>
      </div>
    )
  }
}
export default News