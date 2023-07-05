import closeIcon from '../../images/CloseIcon.svg';

export default function ImagePopup() {
  return (
    <section className="popup popup-picture">
      <div className="popup__container">
        <button className="popup__close-button" type="button">
          <img
            className="popup__close-img"
            src={closeIcon}
            alt="Закрыть"
          />
        </button>
        <img src="/" alt="фото" className="popup__img" />
        <h2 className="popup__photo-title"> </h2>
      </div>
    </section>
  )
}