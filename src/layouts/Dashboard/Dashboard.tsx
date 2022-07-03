import React, { FC } from 'react'
import { Block, Text } from '../../elements'
import { Header } from '../../components'

interface Props {
  employees: EmployeeValue[]
}

export interface EmployeeValue {
  id: string
  fullName: string
  daysLeft: number
}

export const Dashboard: FC<Props> = ({ employees }) => {
  return (
    <Block>
      <Header>Holidays</Header>

      <Block>
        <Block flex justify="between">
          <Text>Full Name</Text>
          <Text>Lays Left</Text>
        </Block>

        {employees.map((employee) => (
          <Block key={employee.id} flex justify="between">
            <Text>{employee.fullName}</Text>
            <Text>{employee.daysLeft}</Text>
          </Block>
        ))}
      </Block>
    </Block>
  )
}
