import { Select } from '@mantine/core';
import { useEffect, useState } from 'react';

interface Iprops {
  title: string;
  select: string;
  onSelectChange: (value: string | null) => void;
  selectedValue: string | null;
}

interface Option {
  value: string;
  label: string;
}

const SelectFilm = (props: Iprops) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    if (props.title === 'Genres') {
      fetchGenres();
    } else if (props.title === 'Release year') {
      fetchYears();
    }
  }, [props.title]);

  const fetchGenres = () => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ffcdeae851e10aa8f18567123ef81640')
      .then(response => response.json())
      .then(data => setOptions(data.genres.map((genre: { id: number, name: string }) => ({ value: genre.id.toString(), label: genre.name }))))
      .catch(err => console.error(err));
  }

  const fetchYears = () => {
    const years = Array.from({ length: 100 }, (_, i) => {
      const year = (new Date().getFullYear() - i).toString();
      return { value: year, label: year };
    });
    setOptions(years);
  }

  return (
    <div>
      <h1 className='titleFilter'>{props.title}</h1>
      <Select
        className='filterSize'
        radius="md"
        placeholder={props.select}
        data={options}
        onChange={props.onSelectChange}
        value={props.selectedValue}
      />
    </div>
  )
}

export default SelectFilm;
