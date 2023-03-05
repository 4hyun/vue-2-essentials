import React from 'react'
import APITable from "@/components/APITable"
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: APITable,
} as ComponentMeta<typeof APITable>

export const Primary: ComponentStory<typeof APITable> = () => (
  <APITable>
    <>
      <thead>
    <tr>
      <th>Name</th>
      <th>Scoped</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr id="title" >
      <td><code>title</code></td>
      <td><code>string[]</code></td>
      <td><code>perfect-scrollbar</code> 바로 상위의 slot.</td>
    </tr>
    <tr id="table-colgroup" >
      <td><code>table-colgroup</code></td>
      <td><code>string[]</code></td>
      <td><strong>bootstrap-vue</strong> 의 <code>b-table</code> 의 <strong>table-colgroup</strong> slot 과 동일.
        <strong><code>fields.col</code> prop 으로 값 설정 권장</strong>.</td>
    </tr>
    <tr id="head({key})" >
      <td><code>head({`key`})</code></td>
      <td><code>string[]</code></td>
      <td>필드 헤더를 사용자 정의 렌더링하기 위한 Scoped slot입니다. <code>{'key'}</code>는 <code>Field['key']</code> 입니다.</td>
    </tr>
    <tr id="cell({key})" >
      <td><code>cell({`key`})</code></td>
      <td><code>string[]</code></td>
      <td><strong>bootstrap-vue</strong> 의 <code>b-table</code> 의 <strong>cell</strong> slot 과 동일.</td>
    </tr>
    <tr id="cell-col({key})" >
      <td><code>cell-col({`key`})</code></td>
      <td><code>string[]</code></td>
      <td>NYC</td>
    </tr>
    <tr id="row-details" >
      <td><code>row-details</code></td>
      <td><code>string[]</code></td>
      <td>NYC</td>
    </tr>
    <tr id="detail-cell" >
      <td><code>detail-cell</code></td>
      <td><code>string[]</code></td>
      <td>NYC</td>
    </tr>
    <tr id="detail-cell-col" >
      <td><code>detail-cell-col</code></td>
      <td><code>string[]</code></td>
      <td>NYC</td>
    </tr>
    <tr id="paging" >
      <td><code>paging</code></td>
      <td><code>string[]</code></td>
      <td>NYC</td>
    </tr>
      </tbody>
      </>
  </APITable>
)
