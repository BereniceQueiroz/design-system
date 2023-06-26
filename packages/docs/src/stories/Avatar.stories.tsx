import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/berenicequeiroz.png',
    alt: 'Berenice Queiroz',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
