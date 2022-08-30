import { useState } from 'react'
import { API_URL } from '../utils/constants'

const useCardslist = () => {
    const [cardsList, setCardsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchCardsList = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL);
            const data = await response.json();
            setCardsList(data);
            setLoading(false);

        } catch (error) {
            setError(typeof error === "object" ? error?.message : error)
            setLoading(false);

        }
    };
    return {
        cardsList, loading, error, fetchCardsList
    }
}

export default useCardslist