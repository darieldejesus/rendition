import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Tooltip } from '../'

const Container = styled.div`
  margin: 60px;
`

storiesOf('Tooltip', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .addWithInfo('Hover', () => {
    return (
      <div>
        <Tooltip message='Lorem ipsum dolor sit'>
          <a>Hover over me</a>
        </Tooltip>
        <br />
        <Tooltip>
          <a>Disabled hover tooltip</a>
        </Tooltip>
      </div>
    )
  })
  .addWithInfo('Click', () => {
    return (
      <div>
        <Tooltip message='Lorem ipsum dolor sit' eventType='click'>
          <a>Click me</a>
        </Tooltip>
        <br />
        <Tooltip eventType='click'>
          <a>Disabled click tooltip</a>
        </Tooltip>
      </div>
    )
  })
