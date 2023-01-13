import { Dropdown } from '@nextui-org/react'
import { Category } from 'react-iconly'

export const CategoryDown = () => {
  return (
    <Dropdown>
      <Dropdown.Button icon={<Category set="bold" />} light  ></Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">New file</Dropdown.Item>
        <Dropdown.Item key="copy">Copy link</Dropdown.Item>
        <Dropdown.Item key="edit">Edit file</Dropdown.Item>
        <Dropdown.Item key="delete" color="error">
          Delete file
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}