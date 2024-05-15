import { Select } from "@mantine/core";
import './Sort.css'

const Sort = () => {
  return (
    <div className="sortBlock">
        <h1 className="sort titleFilter">Sort by</h1>
        <Select 
        className="sort"
        placeholder="Select placeholder"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        />
    </div>
  )
}

export default Sort
