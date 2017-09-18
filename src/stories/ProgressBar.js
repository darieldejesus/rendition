import { h, Component } from 'preact'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import ProgressBar from '../components/ProgressBar'

const Container = styled.div`margin: 30px;`

class Progressor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: props.value
    }

    setInterval(() => {
      let value = this.state.value + 1
      if (value > 100) {
        value = 0
      }
      this.setState({ value })
    }, 250)
  }

  render () {
    const { value, ...other } = this.props
    return (
      <ProgressBar {...other} value={this.state.value}>
        {this.state.value}%
      </ProgressBar>
    )
  }
}

storiesOf('ProgressBar', module)
  .addWithInfo('Standard', () => {
    return (
      <Container>
        <Progressor mb={3} primary value={50} />
        <Progressor mb={3} secondary value={45} />
        <Progressor mb={3} tertiary value={40} />
        <Progressor mb={3} danger value={35} />
        <Progressor mb={3} warning value={30} />
        <Progressor mb={3} success value={25} />
        <Progressor mb={3} info value={20} />
      </Container>
    )
  })
  .addWithInfo('Emphasized', () => {
    return (
      <Container>
        <Progressor mb={3} emphasized primary value={50} />
        <Progressor mb={3} emphasized secondary value={45} />
        <Progressor mb={3} emphasized tertiary value={40} />
        <Progressor mb={3} emphasized danger value={35} />
        <Progressor mb={3} emphasized warning value={30} />
        <Progressor mb={3} emphasized success value={25} />
        <Progressor mb={3} emphasized info value={20} />
      </Container>
    )
  })
