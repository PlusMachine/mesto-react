import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import CurrentUserContext from './contexts/CurrentUserContext';
import PopupWithConfirmation from './ConfirmationPopup/ConfirmationPopup';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([])

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmPopupOpen(false);
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

  function deleteCard(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    }).catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
    closeAllPopups();
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleCardDelete(card) {
    setIsConfirmPopupOpen(true);
    setSelectedCard(card);
  }

  useEffect(
    () => {
      setIsLoading(true);
      Promise.all([api.getInitialCards(), api.getUser()])
        .then(([initialCards, user]) => {
          setCurrentUser(user);
          setCards(initialCards);
          setIsLoading(false);
        }
        ).catch((error => console.error(`Ошибка при получении массива карточек или информации о пользователе ${error}`)))
    }, []
  )

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    isLiked ?
      api.deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => (state.map((c) => c._id === card._id ? newCard : c)));
        })
      :
      api.addLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page-content">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          isLoading={isLoading}
          onCardLike={handleCardLike}
          onBasketClick={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

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

        <PopupWithConfirmation
          name='delete-card'
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onSubmit={deleteCard}
          card={selectedCard}
          title='Вы уверены?'
          buttonText='Да'
        />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />


      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


