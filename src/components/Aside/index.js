import styled from 'styled-components';

import {media} from '../../utils/style';

const Aside = styled.div`
  font-size: ${props => props.theme.text.xs.sm};
  line-height: ${props => props.theme.line.md};
  float: left;
  padding-left: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};

  ${media.sm`
    font-size: ${props => props.theme.text.md.sm};
    padding-left: 0;
  `};
`;

const AsidePrimary = Aside.extend`
  text-align: right;
`;

const AsideSecondary = Aside.extend`
  margin-left: ${props => props.theme.spacing.md};
  text-align: left;
`;

export {Aside, AsidePrimary, AsideSecondary};
