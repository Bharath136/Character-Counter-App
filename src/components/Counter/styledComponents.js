import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 40px 240px;
  justify-content: center;
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

export const CounterApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  background-color: #0f172a;
  border-radius: 0 10px 10px 0;
  width: 100%;
  padding: 20px;
  gap: 80px;
`

export const CounterHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: #ffbf1f;
`

export const Container = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
`

export const CounterInput = styled.input`
  padding: 10px;
  outline: none;
  background-color: #fff;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
`

export const AddButton = styled.button`
  height: 40px;
  width: 80px;
  border-radius: 4px;
  outline: none;
  border: 0;
  background-color: #ffc533;
  color: #475569;
  cursor: pointer;
`

// two

export const ListContainer = styled.div`
  min-height: 80vh;
  background-color: #ffc533;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  width: 100%;
`

export const HeadingContainer = styled.div`
  background-color: #ffbf1f;
  padding: 20px;
  margin-bottom: 40px;
`
export const Heading = styled.h1`
  color: #334155;
  font-size: 28px;
  font-family: 'Roboto';
`

export const CounterList = styled.ul`
  list-style-type: none;
  padding: 40px;
`
// not found

export const EmptyListContainer = styled.div`
  width: 100%;
`

export const EmptyImg = styled.img`
  width: 100%;
`
