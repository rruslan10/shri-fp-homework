import React from 'react';
import InputWithValidation from './InputWithValidation';
import {
    validateShapeSet1,
    validateShapeSet2,
    validateShapeSet3,
    validateShapeSet4,
    validateShapeSet5,
    validateShapeSet6,
    validateShapeSet7,
    validateShapeSet8,
    validateShapeSet9,
    validateShapeSet10,
} from '../../helpers/validators';


import styles from './styles.module.css';


const ValidationPlayground = () => {
    return (
        <div className={styles.root}>
            <InputWithValidation validateFn={validateShapeSet1} label="1. Красная звезда, зеленый квадрат, все остальные белые"/>

            <InputWithValidation validateFn={validateShapeSet2} label="2. Как минимум две фигуры зеленые"/>

            <InputWithValidation validateFn={validateShapeSet3} label="3. Количество красных фигур равно кол-ву синих"/>

            <InputWithValidation validateFn={validateShapeSet4} label="4. Синий круг, красная звезда, оранжевый квадрат, треугольник любого цвета"/>

            <InputWithValidation validateFn={validateShapeSet5} label="5. Три фигуры одного любого цвета кроме белого (четыре фигуры одного цвета – это тоже true)"/>

            <InputWithValidation validateFn={validateShapeSet6} label="6. Ровно две зеленые фигуры (одна из зелёных – это треугольник), плюс одна красная. Четвёртая оставшаяся любого доступного цвета, но не нарушающая первые два условия"/>

            <InputWithValidation validateFn={validateShapeSet7} label="7. Все фигуры оранжевые"/>

            <InputWithValidation validateFn={validateShapeSet8} label="8. Не красная и не белая звезда, остальные – любого цвета"/>

            <InputWithValidation validateFn={validateShapeSet9} label="9. Все фигуры зеленые"/>

            <InputWithValidation validateFn={validateShapeSet10} label="10. Треугольник и квадрат одного цвета (не белого)"/>
        </div>
    );
};


export default ValidationPlayground;
