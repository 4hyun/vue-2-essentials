import React from 'react'
import APITable from "@/components/APITable"
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: APITable,
} as ComponentMeta<typeof APITable>

export const Primary: ComponentStory<typeof APITable> = () => (
  <APITable>
    
  </APITable>
)
