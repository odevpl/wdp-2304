import React from 'react';
import { useState } from 'react';
import styles from './ChatBot.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faTimes,
  faRedo,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.chat}>
      {!isOpen && (
        <button className={styles.chatButton} onClick={handleToggleChat}>
          Potrzebujesz pomocy, napisz!
        </button>
      )}
      {isOpen && (
        <div className={styles.chatBox} style={{ display: isOpen ? 'flex' : 'none' }}>
          <div className={styles.chatHeader}>
            <Button variant='icon'>
              <FontAwesomeIcon icon={faRedo} className={styles.headerIcon} />
            </Button>
            <Button variant='icon' onClick={handleToggleChat}>
              <FontAwesomeIcon icon={faTimes} className={styles.headerIcon} />
            </Button>
          </div>
          <div className={styles.messagesContainer}>
            <div className={styles.botMessage}>
              <FontAwesomeIcon icon={faRobot} className={styles.botIcon} />
              <p>W czym mogę pomóc?</p>
            </div>
          </div>
          <form className={styles.messageForm}>
            <textarea
              className={styles.messageInput}
              name='message'
              placeholder='Wpisz swoje pytanie ...'
            />
            <Button variant='icon'>
              <FontAwesomeIcon icon={faPaperPlane} className={styles.planeIcon} />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
