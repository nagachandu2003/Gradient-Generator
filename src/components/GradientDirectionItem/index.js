import {Button, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, onSelectDirection, active} = props
  const {value, displayText} = itemDetails
  const onSelectBtn = () => {
    onSelectDirection(value)
  }
  return (
    <ListItem>
      <Button active={active === value} onClick={onSelectBtn} type="submit">
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
