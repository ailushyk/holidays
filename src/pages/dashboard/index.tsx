import React, { FC } from 'react'
import { Dashboard } from '../../layouts'
import { employees } from '../../data/api/employees'

interface Props {}

const DashboardPage: FC<Props> = () => {
  return <Dashboard employees={employees} />
}

export default DashboardPage
