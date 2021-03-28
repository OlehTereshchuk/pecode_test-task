import React from 'react';
import Modal from '@material-ui/core/Modal';
import {characterStatus} from '../../../enums/index';

const CharacterModal = ({isOpened, onClose, activeCharacter}) => {
  return (
    <Modal
      open={isOpened}
      onClose={onClose}
      disableAutoFocus
      disableEnforceFocus
    >
      <div className="modal">
        <div className="modal__image" style={{backgroundImage: `url(${activeCharacter.image})`}}></div>
        <h2 className="modal__name">{activeCharacter.name}</h2>
        <div className="item__info">
          <div className="item__indicator" style={{backgroundColor: characterStatus[activeCharacter.status]}}></div>
          <span className="modal__status">{activeCharacter.status} - {activeCharacter.species} - {activeCharacter.gender}</span>
        </div>
        <p className="modal__text">Last known location:</p>
        <p className="modal__location">{activeCharacter.location?.name}</p>
        <p className="modal__text">First seen in:</p>
        <p className="modal__location">{activeCharacter.origin?.name}</p>
      </div>
    </Modal>
  );
};

export default CharacterModal;