import {css, keyframes} from 'styled-components';

const collapse = collapse => css`
  height: auto;
  max-height: ${collapse ? '0' : '100000px'};
  overflow: hidden;
  transition: max-height ${timeout}ms ease-in-out;
`;

const fadeSequence = keyframes`
  100% { opacity: 1; }
`;

const fadeIn = () => {
  return `
    animation: ${fadeSequence} .5s forwards;
    opacity: 0;
  `;
};

const fadeTimeline = {
  topBottom: {opacity: 0},
  topCenter: {opacity: 1},
};

const media = {
  sm: (...args) => css`
    @media (min-width: ${props => props.theme.screen.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: ${props => props.theme.screen.md}) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: ${props => props.theme.screen.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (min-width: ${props => props.theme.screen.xl}) {
      ${css(...args)};
    }
  `,
};

const placeholder = color => css`
  input,
  select,
  textarea {
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${color};
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${color};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${color};
    }
  }

  select {
    color: ${color};
  }
`;

const shakeSequence = keyframes`
  8%, 41% {
    transform: translateX(-10px);
  }
  25%, 58% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-5px);
  }
  92% {
    transform: translateX(5px);
  }
  0%, 100% {
    transform: translateX(0);
  }
`;

const shake = () => {
  return `
    animation: ${shakeSequence} .5s forwards;
  `;
};

const timeout = 250;

const link = () => css`
  color: inherit;
  display: inline-block;
  line-height: ${props => props.theme.line.sm};
  position: relative;
  text-decoration: none;

  &:after,
  &:before {
    background-color: currentColor;
    bottom: -2px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transition: 0.15s ease-in-out;
    width: 0;
  }

  &:after {
    background-color: ${props => props.theme.colors.primary};
  }

  body.no-touch & {
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }

  &.active {
    &:before {
      width: 100%;
    }
  }
`;

export {
  collapse,
  fadeIn,
  fadeTimeline,
  media,
  placeholder,
  shake,
  timeout,
  link,
};
