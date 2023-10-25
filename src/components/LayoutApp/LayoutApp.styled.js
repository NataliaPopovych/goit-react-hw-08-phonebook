import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  flex-grow: 1;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  height: 72px;
  background-color: darkblue;
  border-radius: 8px;
  box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -webkit-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -moz-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const CopyrightLink = styled(Link)`
  color: white;
`;
