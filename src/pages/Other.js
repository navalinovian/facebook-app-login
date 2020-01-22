import React, { Component } from 'react'

export default class Other extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       nama: 12312,
       id: 23123,
    }
  }

  // componentWillMount() {
  //   this.setState({id: localStorage.getItem("id"), nama: localStorage.getItem("name")})
  // }
  
  
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div className="id">
                {this.state.id}
            </div>
            <div className="nama">
                {this.state.nama}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
