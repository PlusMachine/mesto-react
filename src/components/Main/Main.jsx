import addButtonPic from '../../images/add-button.svg';
import editButtonPic from '../../images/EditButton.svg';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main>
      <section className="profile" aria-label="профиль">
        <div className="profile__user">
          <img src="#" alt="аватар" className="profile__image" />
          <button className="profile__button" type="button" onClick={onEditAvatar} />
          <div className="profile__info">
            <div className="profile__personal-data">
              <h1 className="profile__name" />
              <button className="profile__edit-button" type="button" onClick={onEditProfile}>
                <img
                  src={editButtonPic}
                  alt="редактировать профиль"
                  className="profile__edit-button-pic"
                />
              </button>
            </div>
            <p className="profile__profession" />
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
        <ul className="elements__list"></ul>
      </section>
    </main>
  )
}