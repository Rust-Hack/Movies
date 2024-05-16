import { Select } from '@mantine/core'

interface Iprops {
    title: string;
    select: string
}

const SelectFilm = (props: Iprops) => {
  return (
    <div>
      <h1 className='titleFilter'>{props.title}</h1>
      <Select
      className='filterSize'
      radius="md"
      placeholder={props.select}
      data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </div>
  )
}

export default SelectFilm

