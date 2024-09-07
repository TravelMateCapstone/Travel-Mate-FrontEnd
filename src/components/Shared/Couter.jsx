import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../redux/actions/couterAction';

export const Couter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.couter.count);

    const handleIncrease = () => {
        dispatch(increase());
    };

    const handleDecrease = () => {
        dispatch(decrease());
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Couter;
