import { TAnimal } from "../types/animals.types";

import capiImg from '../../../assets/imgs/capi.jpg'
import ranaImg from '../../../assets/imgs/frog.jpg'
import zorroImg from '../../../assets/imgs/fox.jpg'


export const animals: TAnimal[] = [
    {
        id:1,
        name: 'Capibara',
        image: capiImg,
        title: 'El rodeor gigante.'
    },
    {
        id:2,
        name: 'Rana',
        image: ranaImg,
        title: 'Pequeño pero letal.'
    },
    {
        id:3,
        name: 'Zorro',
        image: zorroImg,
        title: 'La naturaleza es la mejor maestra de la verdad.'
    },
];