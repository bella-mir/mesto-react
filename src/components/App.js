import React, {useEffect} from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import api from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, openEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, openEditAvatar] = React.useState(false);
  const [selectedCard, setSelectedCards] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});


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

  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
