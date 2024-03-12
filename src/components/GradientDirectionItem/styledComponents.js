import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => (props.active ? '#ffffff' : '#fffffff79')};
  color: #1e293b;
  border-width: 0;
  border-radius: 5px;
  padding: 10px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  cursor: pointer;
  height: 30px;
`
export const ListItem = styled.li`
  margin: 10px;
  height: 30px;
`
