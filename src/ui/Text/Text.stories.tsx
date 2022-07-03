import { Text } from './Text'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'UI/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args}>Hello world</Text>
}

const Default = Template.bind({})

const Uppercase = Template.bind({})
Uppercase.args = {
  uppercase: true,
}

export { Default, Uppercase }
