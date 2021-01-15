import React from "react";
import axios from 'axios'
import styled from "styled-components";
import { baseUrl, axiosConfig } from '../Parameters'

const ListPlayList = styled.div``

export default class List extends React.Component {
    state = {
        PlayList: []
    }

    componentDidMount = () => {
      this.getPlayList()
    }

    getPlayList = () => {
    
        axios.get(baseUrl, axiosConfig)
        .then((res) => {
          alert("Sua playList foi encontrada!")
          this.setState({PlayList: res.data})
        })
        .catch((err) => {
          alert("Erro: Sua playsList não foi encontrada!", err)
        })
      }

    render() {
        return (
            <ListPlayList>
                <h1>Lista de Músicas:</h1>

                {this.state.PlayList.map((list) => {
                  return (
                    <div>
                      <p>{list.name}</p>
                    </div>
                  )
                })}
            </ListPlayList>
        )
    }
 }
 