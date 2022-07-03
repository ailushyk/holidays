import { Dashboard } from './Dashboard'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { employees } from '../../data/api/employees'

export default {
  component: Dashboard,
  args: {
    employees,
  },
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = (args) => {
  return <Dashboard {...args} />
}

const Default = Template.bind({})

export { Default }
