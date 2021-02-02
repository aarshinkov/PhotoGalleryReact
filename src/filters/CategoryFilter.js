import React from 'react';
import { Form } from 'react-bootstrap';

import { setSelectedCategory } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const CategoryFilter = (props) => {

    const selectedCategory = useSelector(state => state.selectedFilters.selectedCategory);
    const dispatch = useDispatch();

    const changeSelectedCategory = (event) => {
        dispatch(setSelectedCategory(event.target.value));
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Категории</Form.Label>
                <Form.Control as="select"
                    onChange={changeSelectedCategory} value={selectedCategory}>
                    <option value="">-- Без значение --</option>
                    <option value="backgrounds">Фонове</option>
                    <option value="fashion">Мода</option>
                    <option value="nature">Природа</option>
                    <option value="science">Наука</option>
                    <option value="education">Образование</option>
                    <option value="feelings">Чувства</option>
                    <option value="health">Здраве</option>
                    <option value="people">Хора</option>
                    <option value="religion">Религия</option>
                    <option value="places">Места</option>
                    <option value="animals">Животни</option>
                    <option value="industry">Индустрия</option>
                    <option value="computer">Компютри</option>
                    <option value="food">Храна</option>
                    <option value="sports">Спорт</option>
                    <option value="transportation">Транспорт</option>
                    <option value="travel">Пътуване</option>
                    <option value="buildings">Сгради</option>
                    <option value="business">Бизнес</option>
                    <option value="music">Музика</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default CategoryFilter;