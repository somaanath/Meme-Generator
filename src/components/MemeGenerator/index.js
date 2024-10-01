import {Component} from 'react'
import {
  BgContainer,
  CreateForm,
  Heading,
  Input,
  Label,
  Select,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {fontSize: fontSizesOptionsList[0].optionId}

  submitForm = event => {
    event.preventDefault()
  }

  onChangeFontValue = event => {
    console.log(event.target.value)
  }

  render() {
    const {fontSize} = this.state
    console.log(typeof fontSize)
    return (
      <BgContainer>
        <CreateForm onSubmit={this.submitForm}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="url">Image Url</Label> <br />
          <Input type="text" placeholder="Enter the Image Url" id="url" />
          <br />
          <Label htmlFor="top">Top Text</Label> <br />
          <Input type="text" placeholder="Enter the Top Text" id="top" />
          <br />
          <Label htmlFor="bottom">Bottom Text</Label> <br />
          <Input type="text" placeholder="Enter the Bottom Text" id="bottom" />
          <br />
          <Label htmlFor="font">Font Size</Label> <br />
          <Select name="font-size" id="font" onChange={this.onChangeFontValue}>
            {fontSizesOptionsList.map(eachValue => (
              <option key={eachValue.optionId} value={eachValue.optionId}>
                {eachValue.displayText}
              </option>
            ))}
          </Select>
          <Button type="submit">Generate</Button>
        </CreateForm>
      </BgContainer>
    )
  }
}

export default MemeGenerator
