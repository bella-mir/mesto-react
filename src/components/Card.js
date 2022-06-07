function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
      }  


    return (
        <article class="place" key={card._id} onClick = {handleClick}>
        <img class="place__image" alt={card.name} src={card.link} />
        <button type="button" class="place__remove"></button>
        <div class="place__info">
            <h2 class="place__name">{card.name}</h2>
            <div class="place__like-section">
                <button type="button" class="place__like"></button>
                <span class="place__like-count">{card.likes.length}</span>
            </div>
        </div>
    </article>
    );
}

export default Card;