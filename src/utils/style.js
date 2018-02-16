import styled, { keyframes } from 'styled-components'

const fadeSequence = keyframes`
  100% { opacity: 1; }
`;

const fadeIn = () => {
  return `
    animation: ${fadeSequence} .5s forwards;
    opacity: 0;
  `
}

export { fadeIn }
