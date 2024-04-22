import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeFilter } from '../../redux/filter/filtersSlice';
import { selectNameFilter } from '../../redux/selectors'
import s from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectNameFilter);

    const handleFilterChange = e => { 
        const value = e.target.value;
       
        dispatch(handleChangeFilter(value));
    };

    return (
        <div className={s.filter}>
            <label htmlFor="filter">Filter contacts by name or phone number:</label>
            <input
                type="text"
                id="filter"
                name="filter"
                value={ nameFilter } 
                onChange={handleFilterChange}
                placeholder="name or phone"
            />
        </div>
    );
};

export default Filter;






