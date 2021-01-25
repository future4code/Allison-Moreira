import React from 'react'
import TrackToPlayList from './components/trackto/trackto'
import PlayList from './components/playlist/PlayList'
import Search from './components/search/search'
import Image from './img/bg-labefy.jpg'
import styled from 'styled-components'

const PageContainer = styled.div``

const PageHome = styled.div`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  height: 100vh;
  padding: 20px 200px;
`

export default class App extends React.Component {
  state = {
    page: true
  }

  changePage = () => {
    this.setState({
      page: !this.state.page
    })
  }

  render() {
    return (
      <PageHome background={Image} >
        <PageContainer>
          <PlayList />
          {/* <Search /> */}
          {/* <TrackToPlayList/> */}
        </PageContainer>
      </PageHome>
    )
  }
}
