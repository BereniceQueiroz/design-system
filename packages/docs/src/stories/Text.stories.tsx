import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ui/react'

export default {
  title: 'Surfaces/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eos praesentium hic excepturi ea! Beatae harum error suscipit qui libero eligendi laudantium debitis soluta sit modi saepe, id impedit animi.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CutomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
