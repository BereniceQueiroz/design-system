import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>Teste elemento Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
