import {Component} from 'react'
import {v4} from 'uuid'
import CounterItem from '../CounterItem'
import {
  MainContainer,
  CounterApp,
  CounterHeading,
  Container,
  CounterInput,
  AddButton,
  ListContainer,
  HeadingContainer,
  Heading,
  CounterList,
  EmptyListContainer,
  EmptyImg,
} from './styledComponents'

class Counter extends Component {
  state = {inputCharacters: '', counterList: []}

  onAddButton = event => {
    event.preventDefault()
    const {inputCharacters} = this.state
    const obj = {word: inputCharacters, count: inputCharacters.length, id: v4()}
    if (inputCharacters !== '') {
      this.setState(preState => ({
        counterList: [...preState.counterList, obj],
        inputCharacters: '',
      }))
    }
  }

  onChangeInput = event => {
    this.setState({inputCharacters: event.target.value})
  }

  render() {
    const {inputCharacters, counterList} = this.state

    return (
      <MainContainer>
        <ListContainer>
          <HeadingContainer>
            <Heading>Count the characters like a Boss...</Heading>
          </HeadingContainer>
          {counterList.length === 0 ? (
            <EmptyListContainer>
              <EmptyImg
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            </EmptyListContainer>
          ) : (
            <CounterList>
              {counterList.map(eachCounter => (
                <CounterItem key={eachCounter.id} eachCounter={eachCounter} />
              ))}
            </CounterList>
          )}
        </ListContainer>
        <CounterApp>
          <CounterHeading>Character Counter</CounterHeading>
          <Container onSubmit={this.onAddButton}>
            <CounterInput
              type="text"
              placeholder="Enter the Characters here"
              value={inputCharacters}
              onChange={this.onChangeInput}
            />
            <AddButton type="submit">Add</AddButton>
          </Container>
        </CounterApp>
      </MainContainer>
    )
  }
}

export default Counter
