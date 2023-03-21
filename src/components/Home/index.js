import './index.css'
import {Component} from 'react'

class Home extends Component {
  state = {text: 'Login'}

  btnClick = () => {
    this.setState(prevState => ({
      text: prevState.text === 'Login' ? 'Logout' : 'Login',
    }))
  }

  render() {
    const {text} = this.state
    const update = text === 'Login' ? 'Please Login' : 'Welcome User'
    return (
      <div className="mainBg">
        <div className="card">
          <h1 className="head2">{update}</h1>
          <div className="btnCont">
            <button className="btn" type="submit" onClick={this.btnClick}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
