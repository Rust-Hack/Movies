import { Select } from "@mantine/core";
import './Rating.css'



const RatingFilm = () => {
  return (
    <div className="rating">
      <h1 className="titleFilter">Ratings</h1>
      <div className="yearFilter">
          <Select
        radius="md"
        placeholder="From"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        />
        <Select
        radius='md'
        placeholder="To"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        />
      </div>
      
    </div>
  )
}

export default RatingFilm
