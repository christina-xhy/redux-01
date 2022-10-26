import React, { PureComponent } from 'react'
import store from '../store'
import { subNumberAction } from '../store/actionCreators'

export class Profile extends PureComponent {
    constructor(){
      super()
      this.state = {
        counter:100
      }
  
    }
    componentDidMount(){
      store.subscribe(()=>{
        console.log('zhixingle')
        const state = store.getState()//设置默认初始值
        this.setState({counter:state.counter})
      })
    } //订阅后,当数据发展改变时，则可以更新渲染和展示数据 

    subNumber(num){
      store.dispatch(subNumberAction(num))
    }
    //派发action
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>profile  Counter:{counter} </h2>
        <div>
          <button onClick={ e => this.subNumber(1)}>-1</button>
          <button onClick={ e => this.subNumber(5)}>-5</button>
          <button onClick={ e => this.subNumber(8)}>-8</button>
        </div>
        
        </div>
    )
  }
}

export default Profile