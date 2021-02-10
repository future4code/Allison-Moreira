import React from "react";
import axios from 'axios'
// import CreateMain from './CreateMain'
import styled from "styled-components";
import { baseUrl, axiosConfig } from '../../Parameters'


const MainPlayList = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
`

const Input = styled.input`
    height: 32px;
    padding: 0 16px;
    border: none;
    width: 300px;
`

const Button = styled.button`
    font-size: 14px;
    text-transform: uppercase;
    height: 32px;
    padding: 0 16px;
    margin: 0 2px;
    border-radius: 2px;
    background: #fff;
    color: #030303;
    text-decoration: none;
    border: none;
    cursor: pointer;
`


const ListPlayList = styled.div`
    color: black;
`

const Text = styled.span`
    display: grid;
    margin: 40px 0 20px;
`

  const Font = styled.span`
    font-size: ${props => props.fontSize}px;
    text-transform: uppercase;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 0;
    text-align: center;
`

const Hit = styled.div`
    background-color: white;
    width: 53%;
    margin: 2px;
    padding: 0 25px;
    cursor: pointer;
    border-radius: 15px;
`

  const HitInfo = styled.div`
    padding: 25px 0;
    display: grid;
`

export default class PlayList extends React.Component {
    state = {
        PlayList: [],
        name: ''
    }

    componentDidMount = () => {
      this.getAllPlayList()
    }

    getAllPlayList = async () => {
        try {
          const res = await axios.get(baseUrl, axiosConfig)
          this.setState({PlayList: res.data.result.list})
        } catch(error) {
          console.log(error)
        }
      }

      DeletePlayList = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
        .then((res) => {
          this.getAllPlayList()
        })
        .catch((err) => {
          alert("Por algum motivo, não é possivel Deletar.")
        })
      }

    valueInputCreate = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    createPlayList = () => {
          const body = {
              name: this.state.name
          }

          axios.post(baseUrl, body, axiosConfig)
          .then((res) =>  {
              this.setState({
                  name: ''
              })
              this.getAllPlayList()
          })
          .catch((err) =>  {
              alert("Opps! Houve um erro ao criar sua PlaysList")
          })
      }

    render() {
        return (
            <div>
              <MainPlayList>
                <label>Crie sua PlaysList: </label>
                <div>
                    <Input 
                        placeholder='Crie sua PlaysList'
                        value={this.state.name}
                        onChange={this.valueInputCreate} />
                    <Button onClick={this.createPlayList}>Criar</Button>
                </div>
              </MainPlayList>
              <ListPlayList>
                  <Text>
                    <Font fontSize="16">SUA PLAYLIST DO MOMENTO: </Font>
                    <Font fontSize="26">música é pra conectar</Font>
                  </Text>
                  <Content>
                    {this.state.PlayList.map((list) => {
                        return (
                          <Hit key={list.id}>
                            <HitInfo>
                              <Font fontSize="12">Minha PlayList de:</Font>
                              <Font fontSize="18">{list.name}</Font>
                  
                              <button onClick={() => {this.DeletePlayList(list.id)}}>Delete</button>
                            </HitInfo>
                          </Hit>
                        )
                      })}
                  </Content>
                </ListPlayList>
            </div>
        )
    }
 }
 