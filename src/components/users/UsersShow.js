import React from 'react'
import Auth from '../../lib/Auth'

import axios from 'axios'

import UserProjectsIndex from '../projects/UserProjectsIndex'
import UsersEditForm from './UsersEditForm'

import UsersProfile from './UsersProfile'

class UsersShow extends React.Component{

  constructor(){
    super()
    this.state = {
      data: {},
      error: {},
      edit: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  componentDidMount(){
    Auth.checkAvailability(this.props.match.params.id)
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ data: res.data, status: Auth.checkAvailability(this.props.match.params.id)})
      })
      .catch((err)=>console.log(err.message))
  }

  handleChange({target: {name, value}}){
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e){
    e.preventDefault(e)
    axios.put(`/api/users/${Auth.getUserID()}`, this.state.data,
      {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.changeState())
      .catch((err)=> this.setState({ error: err.response.data }))
  }

  changeState(){
    this.setState({...this.state, edit: !this.state.edit })
  }

  render(){
    const { username, image, project, email, bio } = this.state.data
    if(!this.state.data.email) return null
    return(
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              {!this.state.edit &&  <UsersProfile
                username={username}
                image={image}
                email={email}
                bio={bio}
                changeState={this.changeState}
                status={this.state.status}
              />}
              {this.state.edit && <UsersEditForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                data={this.state.data}
                error={this.state.error}
                status={this.state.status}
              />}
            </div>
            <div className="column ">
              <UserProjectsIndex projects={project} logged={this.state.status}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UsersShow
