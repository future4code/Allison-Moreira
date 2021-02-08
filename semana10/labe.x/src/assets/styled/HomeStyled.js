import styled from "styled-components";

export const HomeStyled = styled.div`


`;

export const HomeMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  padding: 60px;
    align-items: center;
    justify-content: center;
`;

export const Div = styled.div`
`;

export const Text = styled.p`
    font-size: ${props=>props.fontSize}px;
    font-weight: bold;
    text-align: ${props =>props.align || "left"};
    margin: 25px 0;
`

export const Site = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%);
  width: 28em;
  height: 27em;
  /* 	background:  */
  border-radius: 0.5rem;
  background-image: url("https://source.unsplash.com/pZ-XFIrJMtE/1600x900"),
    linear-gradient(
      315deg,
      rgba(2, 0, 36, 0.5) 0%,
      rgba(255, 195, 27, 0.3) 78%,
      rgba(255, 119, 0, 0.1) 100%
    );
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2),
    16px 16px 64px 0 rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Img = styled.img`
  transform: scalex(-1);
  position: absolute;
  transform-origin: bottom left;
  bottom: 0;
  right: -40em;
  height: 20rem;
  animation: ani-suit 30s ease-in-out 2s infinite;
  z-index: 0;

  @keyframes ani-suit {
    100% {
      transform: scalex(-1) translate(0em, 0);
    }

    60% {
      transform: scalex(-1) translate(6em, 1em);
    }
  }

  @keyframes move-right {
    0%,
    100% {
      transform: translatex(0rem);
    }

    60% {
      transform: translatex(0.5rem);
    }
  }

  @keyframes move-left {
    0%,
    100% {
      transform: translatex(0rem);
    }

    60% {
      transform: translatex(-0.5rem);
    }
  }
`;
