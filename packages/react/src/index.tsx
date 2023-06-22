import React from 'react'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  padding: '$4',
  height: '$10',
})

export function App() {
  return <Button>Hello</Button>
}
