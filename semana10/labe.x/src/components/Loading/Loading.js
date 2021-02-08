import styled from "styled-components"

const MainLoading = styled.div`
    background: white;
    color: red;
    font-size: 72px;
    text-align: center;
    height: 70vh;
    padding: 12%;
`


function Loading () {
    return(
        <MainLoading>
            <p>carregando ...</p>
        </MainLoading>
    )
}

export default Loading