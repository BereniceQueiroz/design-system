import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from 'ui-design-system/react'

export default {
  title: 'Surfaces/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'xxs',
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eos praesentium hic excepturi ea! Beatae harum error suscipit qui libero eligendi laudantium debitis soluta sit modi saepe, id impedit animi.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CutomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
