import React from 'react';
import LangFilter from '../filters/LangFilter';
import CategoryFilter from '../filters/CategoryFilter';
// import { useSelector, useDispatch } from 'react-redux';

function Filter() {

    // const images = useSelector(state => state.images);

    // console.log(images);

    return (
        <>
            <div className="d-flex">
                <h3>Филтър</h3>
            </div>
            <hr />
            <div className="card">
                <div className="card-body">
                    <LangFilter />
                    <CategoryFilter />
                </div>
            </div>
        </>
    );
}

export default Filter;