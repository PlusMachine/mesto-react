import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
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
  )
}