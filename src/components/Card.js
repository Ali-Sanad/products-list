import {useState} from 'react';
import styles from '../styles/Card.module.css';

const ICONS_LIST = [
  {
    icon: <i class='fa-regular fa-pen-to-square'></i>,
    text: 'Edit',
  },
  {
    icon: <i class='fa-regular fa-calendar'></i>,
    text: 'Availability',
  },
  {
    icon: <i class='fa-solid fa-lock'></i>,
    text: 'Make private',
  },
  {
    icon: <i class='fa-regular fa-trash-can'></i>,
    text: 'Delete',
  },
];
const Card = ({cardData}) => {
  const [displayIconsList, setDisplayIconsList] = useState(false);
  const toggleIconsList = () => setDisplayIconsList((prev) => !prev);
  return (
    <div className={styles.card}>
      {displayIconsList ? (
        <div onClick={() => toggleIconsList()} className={styles.icons_list}>
          {ICONS_LIST?.map((item, idx) => (
            <div
              className={`${styles.icon_item} ${
                idx === ICONS_LIST.length - 1 ? styles.delete : ' '
              }`}
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <img
            loading='lazy'
            src={cardData?.image}
            alt='Product_Photo'
            className={styles.img}
          />
          <div class={styles.container}>
            <div className={styles.title}>{cardData?.title}</div>

            <div className={styles.pricing_container}>
              <div className={styles.pricing}> {`£ ${cardData?.price}`}</div>
              <div className={styles.vat}>incl. VAT</div>
            </div>
          </div>
          <div className={styles.icon} onClick={() => toggleIconsList()}>
            <i class='fa-solid fa-sliders'></i>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
