import { useEffect, useState } from 'react';
import addButtonPic from '../../images/add-button.svg';
import editButtonPic from '../../images/EditButton.svg';
import api from '../../utils/api';
import Card from '../Card/Card'

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(
    () => {
      Promise.all([api.getInitialCards(), api.getUser()])
        .then(([initialCards, user]) => {
          setUserName(user.name);
          setUserDescription(user.about);
          setUserAvatar(user.avatar);
          setCards(initialCards);
        }
        ).catch((error => console.error(`Ошибка при получении массива карточек или информации о пользователе ${error}`)))
    }, []
  )


  return (
    <main>
      <section className="profile" aria-label="профиль">
        <div className="profile__user">
          <img src={userAvatar} alt="аватар" className="profile__image" />
          <button className="profile__button" type="button" onClick={onEditAvatar} />
          <div className="profile__info">
            <div className="profile__personal-data">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={onEditProfile}>
                <img
                  src={editButtonPic}
                  alt="редактировать профиль"
                  className="profile__edit-button-pic"
                />
              </button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}>
          <img
            src={addButtonPic}
            alt="добавить"
            className="profile__add-button-pic"
          />
        </button>
      </section>
      <section className="elements" aria-label="фотогалерея">
        <ul className="elements__list">
          {
            cards.map(({ _id, ...card }) => (
              <Card
                key={_id}
                card={card}
                onCardClick={onCardClick}
              />
            ))
          }
        </ul>
      </section>
    </main>
  )
}