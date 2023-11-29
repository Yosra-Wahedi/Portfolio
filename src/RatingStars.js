import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './RatingStars.css';

const RatingStars = () => {
    const colors = {
        yellow : "#ffc107",
        grey : "#e4e5e9"
    }
   const [value, setValue] = useState(null);
   const [currentValue, setCurrentValue] = useState(null);
   const  handleRatingChange = (e) =>{
        setValue ({...value, ratingValue: e.target.value})
    }
    return (
        <div className="ratingStars">
            <form>
                <div>
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    
                    return(
                        <label >
                        <input
                        type="radio"
                        name="rating"
                        value={value}
                        onChange = {handleRatingChange}
                        onClick = {() => setCurrentValue(ratingValue)}
                        />
                        <FaStar  className="star" 
                        color={currentValue > index ? colors.yellow : colors.grey}/>
                        </label>
                        )
                    })}
                    </div>
            </form>
        </div>
    )
}
export default RatingStars;