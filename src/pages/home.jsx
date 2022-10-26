import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction } from '../store/actionCreators'

export class Home extends PureComponent {
    constructor(){
      super()
      this.state = {
        counter:100
      }
  
    }
    componentDidMount(){
      store.subscribe(()=>{
        const state = store.getState()//设置默认初始值
        this.setState({counter:state.counter})
      })
    } //订阅后,当数据发展改变时，则可以更新渲染和展示数据 

    addNumber(num){
      store.dispatch(addNumberAction(num))
    }
    // 派发对应的action 

  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>home Counter:{counter} </h2>
        <div>
          <button onClick={ e => this.addNumber(1)} >+1</button>
          <button onClick={ e => this.addNumber(5)}>+5</button>
          <button onClick={ e => this.addNumber(8)}>+8</button>
        </div>
        
        </div>
    )
  }
}

export default Home