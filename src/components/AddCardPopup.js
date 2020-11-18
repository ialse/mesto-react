import React, { useState, useEffect, useContext, useRef } from 'react';
import { InputAddCard } from './PopupHTML';
import PopupWithForm from './PopupWithForm';
import { StatePopup } from '../contexts/StatePopup';

const AddCardPopup = React.memo(({ isOpen, onClose, onAddPlace, isLoading, onValidation }) => {

    // Использую контекст, чтобы понимать когда попап закрывают и очищать поля
    const { isAddPlacePopupOpen } = useContext(StatePopup);

    const placeRef = useRef();
    const linkRef = useRef();

    const [place, setPlace] = useState('');
    const [link, setLink] = useState('');

    // Стейты для валидации полей
    const [formValues, setFormValues] = useState({
        name: '',
        link: ''
    });

    const [error, setError] = useState({});
    const [isInvalid, setIsInvalid] = useState(true);

    // Обработчик нажатия кнопки Создать
    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: place,
            link
        });

        console.log(isAddPlacePopupOpen);
    }

    // Обработчик ввода данных в поля
    function handleChange(e) {

        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));

        // если аттрибут name имеет значение name, то устанавливаем setPlace
        // иначе setLink
        e.target.name === "name" ?
            setPlace(e.target.value) :
            setLink(e.target.value);
    }

    // Если попап закрыли, то очищаем поля, если открыли, устанавливаем
    useEffect(() => {

        if (isAddPlacePopupOpen) {
            placeRef.current.value = '';
            linkRef.current.value = '';
            setFormValues({
                name: '',
                link: ''
            });
        }

    }, [isAddPlacePopupOpen]);

    // Вызов валидации полей при каждом изменении formValues
    useEffect(() => {
        const { allErrors, isInvalid } = onValidation(formValues);
        setError(() => { return allErrors });
        setIsInvalid(isInvalid);

    }, [formValues, onValidation]);

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            btnName="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleAddPlaceSubmit}
            isLoading={isLoading}
            isInvalid={isInvalid}
        >
            <InputAddCard
                onChange={handleChange}
                error={error}
                placeRef={placeRef}
                linkRef={linkRef}
            />
        </PopupWithForm>
    );
});

export default AddCardPopup;