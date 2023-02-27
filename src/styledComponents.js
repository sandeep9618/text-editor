import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: black;
  height: 100vh;
  padding: 4%;
  display: flex;
`
export const TextImg = styled.img`
  height: 80vh;
`
export const EditerContainer = styled.div`
  background-color: #334155;
  height: 80vh;
  border: 1px solid #cbd5e1;
  width: 100%;
  border-radius: 10px;
  margin-left: 20px;
`
export const IconsContainer = styled.ul`
  border-bottom: 1px solid #cbd5e1;
  padding: 10px;
  padding-left: 0px;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const EditButtonOne = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  color: ${props => (props.bold === true ? '#faff00' : '#f1f5f9')};
`
export const EditButtonTwo = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  color: ${props => (props.italic === true ? '#faff00' : '#f1f5f9')};
`
export const EditButtonThree = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => (props.underline === true ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`

export const TextArea = styled.textarea`
  height: 73vh;
  width: 100%;
  outline: none;
  color: white;
  font-size: 23px;
  background-color: transparent;
  border: 0px;
  font-weight: ${props => (props.bold === true ? 'bold' : 'normal')};
  font-style: ${props => (props.italic === true ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.underline === true ? 'underline' : 'normal'};
`
export const MainHeading = styled.h1`
  color: white;
  font-size: 25px;
  margin-top: 0px;
  text-align: center;
`
export const TextAndImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`
