import React from "react"
import axios from 'axios'
import { baseUrl, axiosConfig } from '../parameters'

export class UsersListPage extends React.Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  // getAllUsers = () => {
  //   axios.get(baseUrl, axiosConfig)
  //   .then((res) => {
  //     this.setState({users: res.data})
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  // SINTAXE DO ASYNC & AWAIT
  getAllUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig)
      console.log(response.data)
      this.setState({users: response.data})
    } catch(error) {
      console.log(error)
    }
  }

  deleteUser = (id) => {
    axios.delete(`${baseUrl}/${id}`, axiosConfig)
    .then((res) => {
      this.getAllUsers()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h2>Lista de usuários</h2>
        {this.state.users.map((user) => {
          return (
            <div>
              <p>{user.name}</p>
              <button onClick={() => {this.deleteUser(user.id)}}>X</button>
            </div>
          )
        })}
      </div>
    );
  }
}
