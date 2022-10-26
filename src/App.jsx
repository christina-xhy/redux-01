import React, { PureComponent } from "react";
import Home from "./pages/home";
import Profile from "./pages/profile";
import "./style.css"
import store from "./store";


export class App extends PureComponent {
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
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2> App Counter:{counter}</h2>
          <div className="pages">
            <Home/>
            <Profile/>
            
          </div>
      </div>

    )
  }
}

export default App;
