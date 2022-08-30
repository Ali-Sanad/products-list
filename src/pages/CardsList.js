import {useEffect} from 'react';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import useCardslist from '../hooks/useCardslist';
import styles from '../styles/Card.module.css';

const CardsList = () => {
  const {cardsList, loading, fetchCardsList} = useCardslist();

  useEffect(() => {
    fetchCardsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.card_list}>
      {cardsList.length > 0 ? (
        cardsList?.map((card) => <Card key={card.id} cardData={card} />)
      ) : (
        <h1 className={styles.no_data}>No Data Available</h1>
      )}
    </div>
  );
};

export default CardsList;
