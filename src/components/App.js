import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  const [isEditProfilePopupOpen, openEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, openEditAvatar] = React.useState(false);
  const [selectedCard, setSelectedCards] = React.useState({});

  const handleEditAvatarClick = () => {
    openEditAvatar(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    openEditProfile(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    openAddPlace(!isAddPlacePopupOpen);
  };

  const closeAllPopups = () => {
    openEditAvatar(false);
    openEditProfile(false);
    openAddPlace(false);
    setSelectedCards({});
  };

  const handleCardClick = (card) => {
    setSelectedCards(card);
  };

  return (
    <body className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onCloseAll={closeAllPopups}
          onCardClick={handleCardClick}
          selectedCard={selectedCard}
        />
        <Footer />
      </div>
      
    </body>
  );
}

export default App;
