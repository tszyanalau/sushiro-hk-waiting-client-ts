import type { Meta, StoryObj } from '@storybook/react'

import Icon from '.'

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Refresh: Story = {
  args: {
    className: 'fs-6',
    type: 'arrow-clockwise',
  },
}
