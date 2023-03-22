import {ListItem, Word} from './styledComponents'

const CounterItem = props => {
  const {eachCounter} = props
  const {word, count} = eachCounter
  return (
    <ListItem>
      <Word>
        {word} : {count}
      </Word>
    </ListItem>
  )
}

export default CounterItem
