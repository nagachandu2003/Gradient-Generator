import {Component} from 'react'

import {
  Container,
  Container2,
  Heading,
  Paragraph,
  InputElement,
  Form,
  Container3,
  Button,
  Container4,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  onSelectDirection = value => {
    this.setState({direction: value})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onGenerate = event => {
    event.preventDefault()
    const {color1, color2, direction} = this.state
    this.setState({color1, color2, direction})
  }

  render() {
    const {color1, color2, direction} = this.state

    return (
      <Container
        data-testid="gradientGenerator"
        color1={color1}
        color2={color2}
        direction={direction}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <Container3>
          {gradientDirectionsList.map(ele => (
            <GradientDirectionItem
              key={ele.directionId}
              itemDetails={ele}
              onSelectDirection={this.onSelectDirection}
              active={direction}
            />
          ))}
        </Container3>
        <Paragraph>Pick the Colors</Paragraph>
        <Form onSubmit={this.onGenerate}>
          <Container4>
            <Container2>
              <Paragraph>{color1}</Paragraph>
              <br />
              <InputElement
                onChange={this.onChangeColor1}
                id="color1"
                type="color"
                value={color1}
              />
            </Container2>
            <Container2>
              <Paragraph>{color2}</Paragraph>
              <br />
              <InputElement
                onChange={this.onChangeColor2}
                id="color2"
                type="color"
                value={color2}
              />
            </Container2>
          </Container4>
          <Button type="submit">Generate</Button>
        </Form>
      </Container>
    )
  }
}

export default GradientGenerator
