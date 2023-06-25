import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ui/react'

export default {
  title: 'Surfaces/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CutomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será `h2`, mas podemos alterar com a propriedade as',
      },
    },
  },
}
