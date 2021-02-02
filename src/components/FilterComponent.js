import React, { useEffect } from 'react';
import LangFilter from '../filters/LangFilter';
import CategoryFilter from '../filters/CategoryFilter';
import { Button } from 'react-bootstrap';
import { getImages } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Filter = (props) => {

    const selectedLang = useSelector(state => state.selectedFilters.selectedLang);
    const selectedCategory = useSelector(state => state.selectedFilters.selectedCategory);

    const dispatch = useDispatch();

    const loadImages = () => {
        dispatch(getImages({
            lang: selectedLang,
            category: selectedCategory
        }));
    }
    // const loadImages = useCallback(() => {
    //     dispatch(getImages({
    //         lang: selectedLang,
    //         category: selectedCategory
    //     }));
    // }, [dispatch, selectedLang, selectedCategory]);

    useEffect(() => {
        loadImages();

        // eslint-disable-next-line
    }, []);


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

                    <Button variant="primary" onClick={loadImages}>Филтрирай</Button>
                </div>
            </div>
        </>
    );
}

export default Filter;