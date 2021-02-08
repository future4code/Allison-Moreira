import styled from 'styled-components'

export const TravelMain = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: ${props=>props.columns};
    padding: ${props=>props.padding}px;
`

export const TravelContainer = styled.div`
    display: grid;
    margin: 20px;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.2);
`

export const TravelContent = styled.div`
    padding: 20px;
`

export const Text = styled.p`
    color: ${props=>props.color || 'black'}
`