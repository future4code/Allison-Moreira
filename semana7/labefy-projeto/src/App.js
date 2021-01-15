import React from 'react';
import List from './components/ListPlayList'
import styled from 'styled-components'

const PageHome = styled.div``
const PageNext = styled.div``


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
      <div>

        {/* {this.state.page ? '' : '' } */}

        <PageHome>
          <div>
            <h1>Home</h1>
            <button onClick={this.changePage}>Next Page</button>
          </div>
        </PageHome>

        <PageNext>
          <List />
          <button onClick={this.changePage}>Next Page</button>
          <button onClick={this.changePage}>Back Page</button>
        </PageNext>

      </div>
    )
  }
}
