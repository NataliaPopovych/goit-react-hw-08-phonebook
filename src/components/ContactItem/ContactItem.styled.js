import styled from 'styled-components';

export const ContactItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  & > span {
    display: inline-block;
    text-align: center;
    &:nth-child(1) {
      width: 230px;
      font-size: 18px;
      color: green;
      font-style: italic;
      text-align: left;
    }
    &:nth-child(2) {
      font-weight: 500;
      margin-right: 12px;
      color: green;
      text-align: center;
    }
    &:nth-child(3) {
      text-align: right;
    }
  }
`;

export const DelButton = styled.button`
  display: flex;
  font-size: 14px;
  border: 1px solid darkgreen;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  transition: color 150ms ease-in, background-color 150ms ease-in,
    scale 150ms ease-in;
  &:is(:hover, :focus) {
    color: white;
    background-color: green;
  }
  &:active {
    scale: 0.95;
  }
`;
export const DelButtonSpan = styled.span`
  margin-left: 12px;
`;

export const UpdateButton = DelButton;
