const cards = [6, 23, 4, 17, 8, 32, 14, 21];

const updateCardsRotation = () => {
  // Check at rotate cards size to an even number if needed
  let amountOfDataRequired = cards.length % 2 ? cards.length - 1 : cards.length;

  // Get cards layout data based on hand size
  const startIndex = (cardsLayoutData.length - amountOfDataRequired) / 2;

  const layoutData = cardsLayoutData.slice(
    startIndex,
    startIndex + amountOfDataRequired
  );

  // If array has an odd amount of cards
  if (cards.length % 2) {
    layoutData.splice(layoutData.length / 2, 0, {
      rotate: 0,
      transform: 0,
    });
  }

  layoutData.map((stylesProps, i) => {
    updateCardRotationById(`card-${cards[i]}`, stylesProps);
  });
};

const updateCardRotationById = (cardId, stylesProps) => {
  document.getElementById(
    cardId
  ).style.transform = `translateY(${stylesProps.transform}px) rotate(${stylesProps.rotate}deg)`;
};

const getCenterIndexOfArray = (cards) => Math.floor(cards.length / 2);

const dropAndUpdateCards = (cardId) => {
  cards.splice(cards.indexOf(cardId), 1);
  resetCardStyles(`card-${cardId}`);
  updateCardsRotation();
};

const resetCardStyles = (cardId) => {
  document.getElementById(cardId).style.transform = "";
  document.getElementById(cardId).style.marginLeft = "0";
};

updateCardsRotation();
