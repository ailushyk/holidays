import { Header } from './Header'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args}>Simple Header</Header>
}

const Default = Template.bind({})

export { Default }
