import React, { Component } from 'react';

class Generate extends Component {

    constructor() {
        super()
        this.state = { randomImg:[], top: "", bottom: "" }
    }

   getMemes=async()=>{ this.setState({ randomImg: await this.props.data[Math.floor(Math.random() * 100)].url }) }

   handleInput1 = async (e) => {
    let value = e.target.value
    await this.setState({ top: value })
}

handleInput2 = async (e) => {
    let value = e.target.value
    await this.setState({ bottom: value })
}

    render() {

        return (
            <div>           
							<div className="meme-form">
          <input placeholder="top text" onChange={this.handleInput1}></input>
          <input placeholder="bottom text" onChange={this.handleInput2}></input>
          <button onClick={this.getMemes}>Generate</button>
         </div>
          <div className="meme">
          <img src={this.state.randomImg} ></img>
          <h2 className="top">{this.state.top}</h2>
          <h2 className="bottom">{this.state.bottom}</h2>
            </div>
            </div>
        )
    }
}

export default Generate
