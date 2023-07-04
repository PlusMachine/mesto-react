import '../index.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="page-content">
      <Header />
      <Main />
      <Footer />
      <section className="popup popup-edit">
        <div className="popup__container">
          <button className="popup__close-button" type="button">
            <img
              className="popup__close-img"
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Закрыть"
            />
          </button>
          <form
            className="popup__form popup__form-edit"
            name="change-profile"
            noValidate=""
          >
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <button className="popup__button popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup-edit-avatar">
        <div className="popup__container">
          <button className="popup__close-button" type="button">
            <img
              className="popup__close-img"
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Закрыть"
            />
          </button>
          <form
            className="popup__form popup__form-edit-avatar"
            name="change-avatar"
            noValidate=""
          >
            <h2 className="popup__title">Обновить аватар</h2>
            <fieldset className="popup__input-container">
              <input
                type="url"
                id="link-avatar-input"
                className="popup__form-field popup__form-field_input_avatar"
                name="avatar"
                required=""
                placeholder="Ссылка на картинку"
              />
              <span className="popup__form-input-error link-avatar-input-error" />
            </fieldset>
            <button className="popup__button popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup-add">
        <div className="popup__container">
          <button className="popup__close-button" type="button">
            <img
              className="popup__close-img"
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Закрыть"
            />
          </button>
          <form
            className="popup__form popup__form-add"
            name="add-card"
            noValidate=""
          >
            <h2 className="popup__title">Новое место</h2>
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
            <button className="popup__button popup__add-button" type="submit">
              Создать
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup-picture">
        <div className="popup__container">
          <button className="popup__close-button" type="button">
            <img
              className="popup__close-img"
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Закрыть"
            />
          </button>
          <img src="/" alt="фото" className="popup__img" />
          <h2 className="popup__photo-title"> </h2>
        </div>
      </section>
      <section className="popup popup-confirm">
        <div className="popup__container">
          <div className="popup-confirm__container">
            <button className="popup__close-button" type="button">
              <img
                className="popup__close-img"
                src="<%=require('./images/CloseIcon.svg')%>"
                alt="Закрыть"
              />
            </button>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup-confirm__button" type="button">
              Да
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
