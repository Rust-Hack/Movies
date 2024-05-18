import { useState } from 'react';
import starNoActive from '../../../../images/starNoActive.svg';
import './SelectRating.css';
import closeRating from '../../../../images/CloseRating.svg'
import { Rating } from '@mantine/core';

const SelectRating = () => {

    const [ ratingOpen, setRatingOpen ] = useState<boolean>(false)

    const createFieldRating = () => {
        setRatingOpen(true)
    }

    const closeFieldRating = () => {
        setRatingOpen(false)
    }

  return (
    <div>
        <div onClick={createFieldRating}>
            <img src={starNoActive}/>
        </div>
        {ratingOpen && (
                <div className='ratingWindow'>
                    <div className='ratingWindowBlock'>
                        <div className='blockRatingWindowTitle'>
                            <h1 className='ratingWindowTitle'>Your rating</h1>
                            <img src={closeRating} onClick={closeFieldRating}/>
                        </div>
                        <div className='blockRatingWindowStar'>
                            <h1 className='blockRatingWindowStarTitle'>Coco</h1>
                            <Rating color="rgb(152, 84, 246)" size="xl" count={10} style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}/>
                            <button className='blockRatingWindowStarButton'>Save</button>
                        </div>
                    </div>
                </div>
            )}
    </div>
    
  )
}

export default SelectRating
