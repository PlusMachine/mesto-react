import basket from "../../images/basket.svg";
import like from "../../images/like.svg";

export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card)
  }

  return (
    <li className="elements__element" key={card._id}>
      <button className="elements__basket-button" type="button">
        <img
          src={basket}
          alt="удалить"
          className="elements__basket"
        />
      </button>
      <img src={card.link} alt={card.name} className="elements__image" onClick={handleClick} />
      <div className="elements__text-container">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like">
          <button className="elements__like-button" type="button">
            <img
              src={like}
              alt="нравится"
              className="elements__like-icon"
            />
          </button>
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}