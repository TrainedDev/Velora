import {allCocktails} from '../constants';
import {useState} from 'react';

const Menu = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCocktail = () => {
setCurrentIndex(prev => prev + 1);
    };

    const prevCocktail = () => {
setCurrentIndex(prev => prev - 1);
    };

    const cocktail = (i) => allCocktails[i];

  return (
    <section id='menu' className='flex-col-center justify-center h-auto w-full'>
        <ul className='grid grid-col-2 justify-items-center'>
            {
                allCocktails.map((ele, i) => {
                    <li className='flex-row-center  justify-center captalize'>
<h2>{ele?.name}</h2>
                    </li>
                })
            }
        </ul>

        <div className='flex-row-center justify-around w-full h-30'>
            <div className='flex-col-center w-[20%]'>
                {/* <h2>{cocktail(currentIndex - 1)?.name}</h2> */}
            <img onClick={() => currentIndex === 0 ? setCurrentIndex(allCocktails.length - 1) : prevCocktail()} src='/images/left-arrow.png'/>
            </div>
            <div className='flex-col-center w-[20%]'>
                {/* <h2>{cocktail(currentIndex + 1)?.name}</h2> */}
            <img onClick={() => currentIndex === allCocktails.length - 1 ? setCurrentIndex(0) : nextCocktail()}
            src='/images/right-arrow.png'/>
            </div>
        </div>

        	<div className="cocktail">
		 <img src={cocktail(currentIndex)?.image} className="object-contain"/>
		</div>
    </section>
  )
}

export default Menu