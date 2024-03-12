import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  min-height: 100vh;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

export const Container2 = styled.div`
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  color: white;
  font-weight: bold;
`

export const Paragraph = styled.p`
  color: white;
  margin: 10px;
`

export const InputElement = styled.input`
  width: 70px;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  //   border-radius: 5px;
  //   padding: 10px;
  margin: 10px;
`
export const Label = styled.label`
  color: white;
  margin-bottom: 5px;
  margin: 10px;
`

export const Form = styled.form`
  text-align: center;
`

export const Container3 = styled.ul`
  list-style-type: none;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
`
export const Button = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-weight: bold;
  text-align: transparent;
  border-radius: 5px;
  padding: 10px;
  border: none;
`

export const Container4 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
