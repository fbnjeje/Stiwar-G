import { useState } from 'react';
import { animals } from '../../shared/models/animals';
import './index.css'
import { TAnimal } from '../../shared/types/animals.types';

export default function Home() {
    const [animalsState] = useState<TAnimal[]>(animals)
    
    const [imageIndex, setImageIndex] = useState<number>(0)

    const changeAnimal = (index: number) => {
        setImageIndex(index);
    }

    return (
            <section className='container'>
                <img className='container__img' src={animals[imageIndex].image} alt={animals[imageIndex].name} title={animals[imageIndex].name}  />
                <h1 className='container__title'>{animals[imageIndex].title}</h1>
                <section className='container__menu '>
                    {
                        animalsState.map((item, i) => {
                            return <button key={item.id} className='menu__item' onClick={() => changeAnimal(i)}>
                                {
                                    <p>{item.title}</p> 
                                }
                            </button>
                        })
                    }
                </section>
            </section>
    )
}
