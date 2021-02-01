import React from 'react';

function Filter() {
    return (
        <>
            <div className="d-flex">
                <h3>Филтър</h3>
            </div>
            <hr />
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                        <label for="searchInput" class="form-control-label">Търсене</label>
                        <input type="text" id="searchInput" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="pageInput" class="form-control-label">Страница</label>
                        <input type="number" min="1" id="pageInput" class="form-control" value="1" />
                    </div>
                    <div class="form-group">
                        <label for="limitInput" class="form-control-label">Елементи на страница</label>
                        <input type="number" min="3" max="200" id="limitInput" class="form-control" value="6" />
                    </div>
                    <div class="form-group">
                        <label for="langInput" class="form-control-label">Език</label>
                        <select id="langInput" class="form-control">
                            <option value="en">English</option>
                            <option value="bg" selected>Български</option>
                            <option value="es">Español</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="categoryInput" class="form-control-label">Категория</label>
                        <select id="categoryInput" class="form-control">
                            <option value="" selected>-- Без значение --</option>
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
                        </select>
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input id="editorsChoiceInput" type="checkbox" class="custom-control-input" />
                            <label for="editorsChoiceInput" class="custom-control-label">Избор на редактора</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input id="saveSearchInput" type="checkbox" class="custom-control-input" />
                            <label for="saveSearchInput" class="custom-control-label">*Safe search*</label>
                        </div>
                    </div>
                    <hr />
                    <div class="form-group">
                        <span>Цветове</span>
                        <div class="custom-control custom-checkbox">
                            <input id="grayColor" type="checkbox" class="custom-control-input" />
                            <label for="grayColor" class="custom-control-label gray-text">Сив</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="transparentColor" type="checkbox" class="custom-control-input" />
                            <label for="transparentColor" class="custom-control-label">Прозрачен</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="redColor" type="checkbox" class="custom-control-input" />
                            <label for="redColor" class="custom-control-label red-text">Червен</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="orangeColor" type="checkbox" class="custom-control-input" />
                            <label for="orangeColor" class="custom-control-label orange-text">Оранжев</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="yellowColor" type="checkbox" class="custom-control-input" />
                            <label for="yellowColor" class="custom-control-label text-warning">Жълт</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="greenColor" type="checkbox" class="custom-control-input" />
                            <label for="greenColor" class="custom-control-label green-text">Зелен</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="turquoiseColor" type="checkbox" class="custom-control-input" />
                            <label for="turquoiseColor" class="custom-control-label cyan-text">Тюркоаз</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="blueColor" type="checkbox" class="custom-control-input" />
                            <label for="blueColor" class="custom-control-label blue-text">Син</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="lilacColor" type="checkbox" class="custom-control-input" />
                            <label for="lilacColor" class="custom-control-label purple-text">Лилав</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="pinkColor" type="checkbox" class="custom-control-input" />
                            <label for="pinkColor" class="custom-control-label pink-text">Розов</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="whiteColor" type="checkbox" class="custom-control-input" />
                            <label for="whiteColor" class="custom-control-label bg-dark white-text">Бял</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="blackColor" type="checkbox" class="custom-control-input" />
                            <label for="blackColor" class="custom-control-label black-text">Черен</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input id="brownColor" type="checkbox" class="custom-control-input" />
                            <label for="brownColor" class="custom-control-label brown-text">Кафяв</label>
                        </div>
                    </div>

                    <a id="applyBtn" href="#" class="btn btn-primary btn-sm btn-round ml-0">Филтрирай</a>
                </div>
            </div>
        </>
    );
}

export default Filter;