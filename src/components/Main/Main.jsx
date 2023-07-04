export default function Main() {
  return (
    <main>
      <section className="profile" aria-label="профиль">
        <div className="profile__user">
          <img src="#" alt="аватар" className="profile__image" />
          <button className="profile__button" type="button" />
          <div className="profile__info">
            <div className="profile__personal-data">
              <h1 className="profile__name" />
              <button className="profile__edit-button" type="button">
                <img
                  src="<%=require('./images/EditButton.svg')%>"
                  alt="редактировать профиль"
                  className="profile__edit-button-pic"
                />
              </button>
            </div>
            <p className="profile__profession" />
          </div>
        </div>
        <button className="profile__add-button" type="button">
          <img
            src="<%=require('./images/add-button.svg')%>"
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