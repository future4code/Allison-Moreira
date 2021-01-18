import axios from 'axios'
import React from 'react'
import { axiosConfig, baseUrl } from '../../Parameters'

export default class Search extends React.Component {

    state = {
        quantity: 1,
            list: [],
            id: '',
            name: ''
    }

    componentDidMount = () => {
        this.getSearchPlayList()
    }

    getEvent = (event) => {
        const query = event.target.value
        console.log(query)
    }

    getSearchPlayList = (query) => {
        const nome = "sam"
        
        const body = {
            name: this.state.name
        }
    
        axios.get(`${baseUrl}/search?name=${nome}`, body, axiosConfig)
        .then((res) =>  {  

          })
        .catch((err) =>  {
              alert("Oppss!!!!!")
          })

    }
    
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.getEvent} />
                <button onClick={this.getSearchPlayList}>Buscar</button>
            </div>
        )
    }
}