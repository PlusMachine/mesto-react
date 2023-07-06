import '../index.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({})


  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }


  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card)
  }


  return (
    <div className="page-content">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__input-container">
          <input
            type="text"
            id="name-input"
            className="popup__form-field popup__form-field_input_name"
            name="name"
            required=""
            minLength={2}
            maxLength={40}
            placeholder="Имя"
          />
          <span className="popup__form-input-error name-input-error" />
          <input
            type="text"
            id="about-input"
            className="popup__form-field popup__form-field_input_about"
            name="about"
            placeholder="Профессия"
            required=""
            minLength={2}
            maxLength={200}
          />
          <span className="popup__form-input-error about-input-error" />
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name='edit-avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__input-container">
          <input
            type="text"
            id="title-input"
            className="popup__form-field popup__form-field_input_title"
            name="title"
            required=""
            placeholder="Название"
            minLength={2}
            maxLength={30}
          />
          <span className="popup__form-input-error title-input-error" />
          <input
            type="url"
            id="link-input"
            className="popup__form-field popup__form-field_input_link"
            name="link"
            required=""
            placeholder="Ссылка на картинку"
          />
          <span className="popup__form-input-error link-input-error" />
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name='add-card'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__input-container">
          <input
            type="text"
            id="title-input"
            className="popup__form-field popup__form-field_input_title"
            name="title"
            required=""
            placeholder="Название"
            minLength={2}
            maxLength={30}
          />
          <span className="popup__form-input-error title-input-error" />
          <input
            type="url"
            id="link-input"
            className="popup__form-field popup__form-field_input_link"
            name="link"
            required=""
            placeholder="Ссылка на картинку"
          />
          <span className="popup__form-input-error link-input-error" />
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name='delete-card'
        title='Вы уверены?'
        buttonText='Да'
      />

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />


    </div>
  );
}

export default App;


