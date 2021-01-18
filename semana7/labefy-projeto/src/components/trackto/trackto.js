import React from "react";
import axios from 'axios'
import { baseUrl, axiosConfig } from '../../Parameters'

export default class TrackToPlayList extends React.Component {
    state = {
        TrackToPlayList: [],
        name: '',
        artist: '',
        url: ''
    }

    componentDidMount = () => {
      this.getPlaylistTracks()
    }

    getPlaylistTracks = async () => {
        try {
          const res = await axios.get(baseUrl, axiosConfig)
          this.setState({TrackToPlayList: res.data.result.list})
        } catch(error) {
          console.log(error)
        }
      }

      

    // DeleteTrackFromPlaylist = (playlistId) => {
    //     axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
    //     .then((res) => {
    //       this.getPlaylistTrackst()
    //     })
    //     .catch((err) => {
    //       alert("Por algum motivo, não é possivel Deletar.")
    //     })
    //   }

    valueInputCreateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    valueInputCreateArtist = (event) => {
        this.setState({
            artist: event.target.value
        })
    }

    valueInputCreateUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    createTrackToPlayList = (id) => {

          const body = {
            name: this.state.name, 
            artist: this.state.artist,
            url: this.state.url
          }

          axios.post(`${baseUrl}/${id}/tracks`, body, axiosConfig)
          console.log(axios)
          .then((res) =>  {
              this.setState({
                name: this.state.name, 
                artist: this.state.artist,
                url: this.state.url
              })
              this.getPlaylistTracks()
          })
          .catch((err) =>  {
              alert("Opps! Houve um erro ao criar sua TrackTo PlaysList")
          })
      }

    render() {
        return (
            <div>
                <h1>As track</h1>

                <select>
                {this.state.TrackToPlayList.map((list) => {
                        return (
                                // <span key={list.id} display="none" ></span>
                              <option>{list.name}</option>
                            
                        )
                      })}
                </select>
                
                <input onChange={this.valueInputCreateName} />
                <input onChange={this.valueInputCreateArtist} />
                <input onChange={this.valueInputCreateUrl} />
                <button onClick={this.createTrackToPlayList}>CRIAR</button>
            </div>
        )
    }
 }
 