import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import './App.css'

import {
  BgContainer,
  TextImg,
  EditerContainer,
  IconsContainer,
  EditButtonOne,
  EditButtonTwo,
  EditButtonThree,
  TextArea,
  MainHeading,
  ListItem,
  TextAndImgContainer,
} from './styledComponents'

class App extends Component {
  state = {bold: false, italic: false, underline: false}

  onChangeTextWeight = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onChangeItalicText = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickToUnderLine = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <BgContainer>
        <TextAndImgContainer>
          <MainHeading>Text Editor</MainHeading>

          <TextImg
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </TextAndImgContainer>
        <EditerContainer>
          <IconsContainer>
            <ListItem>
              <EditButtonOne
                data-testid="bold"
                bold={bold}
                onClick={this.onChangeTextWeight}
              >
                <VscBold size={20} />
              </EditButtonOne>
            </ListItem>
            <ListItem>
              <EditButtonTwo
                data-testid="italic"
                italic={italic}
                onClick={this.onChangeItalicText}
              >
                <GoItalic size={20} />
              </EditButtonTwo>
            </ListItem>
            <ListItem>
              <EditButtonThree
                data-testid="underline"
                underline={underline}
                onClick={this.onClickToUnderLine}
              >
                <AiOutlineUnderline size={20} />
              </EditButtonThree>
            </ListItem>
          </IconsContainer>

          <TextArea bold={bold} italic={italic} underline={underline} />
        </EditerContainer>
      </BgContainer>
    )
  }
}

export default App
