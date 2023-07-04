import logo from './images/logo.svg';
import './index.css';

function App() {
  return (
    <body class="page">
      <header class="header">
        <img src={logo} alt="логотип" class="header__logo" />
      </header>
      <main>
        <section class="profile" aria-label="профиль">
          <div class="profile__user">
            <img src="#" alt="аватар" class="profile__image" />
            <button class="profile__button" type="button"></button>
            <div class="profile__info">
              <div class="profile__personal-data">
                <h1 class="profile__name"></h1>
                <button class="profile__edit-button" type="button">
                  <img src="<%=require('./images/EditButton.svg')%>" alt="редактировать профиль"
                    class="profile__edit-button-pic" />
                </button>
              </div>
              <p class="profile__profession"></p>
            </div>
          </div>
          <button class="profile__add-button" type="button">
            <img src="<%=require('./images/add-button.svg')%>" alt="добавить" class="profile__add-button-pic" />
          </button>
        </section>
        <section class="elements" aria-label="фотогалерея">
          <ul class="elements__list">
          </ul>
        </section>
      </main>
      <footer class="footer" aria-label="подвал сайта">
        <p class="footer__author">© 2023 Mesto Russia</p>
      </footer>
      <section class="popup popup-edit">
        <div class="popup__container">
          <button class="popup__close-button" type="button"><img class="popup__close-img"
            src="<%=require('./images/CloseIcon.svg')%>" alt="Закрыть" /></button>
          <form class="popup__form popup__form-edit" name="change-profile" novalidate>
            <h2 class="popup__title">Редактировать профиль</h2>
            <fieldset class="popup__input-container">
              <input type="text" id="name-input" class="popup__form-field popup__form-field_input_name" name="name" required
                minlength="2" maxlength="40" placeholder="Имя" />
              <span class="popup__form-input-error name-input-error"></span>
              <input type="text" id="about-input" class="popup__form-field popup__form-field_input_about" name="about"
                placeholder="Профессия" required minlength="2" maxlength="200" />
              <span class="popup__form-input-error about-input-error"></span>
            </fieldset>
            <button class="popup__button popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </section>
      <section class="popup popup-edit-avatar">
        <div class="popup__container">
          <button class="popup__close-button" type="button"><img class="popup__close-img"
            src="<%=require('./images/CloseIcon.svg')%>" alt="Закрыть" /></button>
          <form class="popup__form popup__form-edit-avatar" name="change-avatar" novalidate>
            <h2 class="popup__title">Обновить аватар</h2>
            <fieldset class="popup__input-container">
              <input type="url" id="link-avatar-input" class="popup__form-field popup__form-field_input_avatar"
                name="avatar" required placeholder="Ссылка на картинку" />
              <span class="popup__form-input-error link-avatar-input-error"></span>
            </fieldset>
            <button class="popup__button popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </section>
      <section class="popup popup-add">
        <div class="popup__container">
          <button class="popup__close-button" type="button"><img class="popup__close-img"
            src="<%=require('./images/CloseIcon.svg')%>" alt="Закрыть" /></button>
          <form class="popup__form popup__form-add" name="add-card" novalidate>
            <h2 class="popup__title">Новое место</h2>
            <fieldset class="popup__input-container">
              <input type="text" id="title-input" class="popup__form-field popup__form-field_input_title" name="title"
                required placeholder="Название" minlength="2" maxlength="30" />
              <span class="popup__form-input-error title-input-error"></span>
              <input type="url" id="link-input" class="popup__form-field popup__form-field_input_link" name="link" required
                placeholder="Ссылка на картинку" />
              <span class="popup__form-input-error link-input-error"></span>
            </fieldset>
            <button class="popup__button popup__add-button" type="submit">Создать</button>
          </form>
        </div>
      </section>
      <section class="popup popup-picture">
        <div class="popup__container">
          <button class="popup__close-button" type="button"><img class="popup__close-img"
            src="<%=require('./images/CloseIcon.svg')%>" alt="Закрыть" /></button>
          <img src="/" alt="фото" class="popup__img" />
          <h2 class="popup__photo-title" > </h2>
        </div>
      </section>
      <section class="popup popup-confirm">
        <div class="popup__container">
          <div class="popup-confirm__container">
            <button class="popup__close-button" type="button"><img class="popup__close-img"
              src="<%=require('./images/CloseIcon.svg')%>" alt="Закрыть" /></button>
            <h2 class="popup__title">Вы уверены?</h2>
            <button class="popup-confirm__button" type="button">Да</button>
          </div>
        </div>
      </section>
      <template class=" template-element">
        <li class="elements__element">
          <button class="elements__basket-button" type="button">
            <img src="<%=require('./images/basket.svg')%>" alt="удалить" class="elements__basket" />
          </button>
          <img src="/" alt="фото" class="elements__image" />
          <div class="elements__text-container">
            <h2 class="elements__title"></h2>
            <div class="elements__like">
              <button class="elements__like-button" type="button">
                <img src="<%=require('./images/like.svg')%>" alt="нравится" class="elements__like-icon" />
              </button>
              <p class="elements__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
