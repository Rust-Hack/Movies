import { useState } from 'react';
import starNoActive from '../../../../images/starNoActive.svg';
import startActive from '../../../../images/startActive.svg';
import './SelectRating.css';
import closeRating from '../../../../images/CloseRating.svg';
import { Rating } from '@mantine/core';

interface SelectRatingProps {
  onSaveRating: (rating: number) => void;
}

const SelectRating: React.FC<SelectRatingProps> = ({ onSaveRating }) => {
  const [quantityStar, setQuantityStar] = useState(0);
  const [ratingOpen, setRatingOpen] = useState<boolean>(false);
  const [ratingInCard, setRatingInCard] = useState(0);

  const createFieldRating = () => {
    setRatingOpen(true);
  }

  const closeFieldRating = () => {
    setRatingOpen(false);
  }

  const handlerSaveRating = () => {
    setRatingInCard(quantityStar);
    setRatingOpen(false);
    onSaveRating(quantityStar);
  }

  const ratingNumber = () => {
    if (ratingInCard === 0) {
      return <p style={{color: 'white'}}>{ratingInCard}</p>
    }

    return <p className='styleRating'>{ratingInCard}</p>
  }

  const colorStar = () => {
    if (ratingInCard === 0) return <img src={starNoActive} alt="Rate" />
    return <img src={startActive} alt="Rate" />
  }

  return (
    <div>
      <div onClick={createFieldRating} className="starIcon">
        {colorStar()}
        {ratingNumber()}
      </div>
      {ratingOpen && (
        <div className='ratingWindow'>
          <div className='ratingWindowBlock'>
            <div className='blockRatingWindowTitle'>
              <h1 className='ratingWindowTitle'>Your rating</h1>
              <img src={closeRating} alt="Close" onClick={closeFieldRating} />
            </div>
            <div className='blockRatingWindowStar'>
              <h1 className='blockRatingWindowStarTitle'>Coco</h1>
              <Rating 
                color="rgb(152, 84, 246)" 
                size="xl" 
                count={10} 
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} 
                value={quantityStar} 
                onChange={setQuantityStar} 
              />
              <button className='blockRatingWindowStarButton' onClick={handlerSaveRating}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectRating;
