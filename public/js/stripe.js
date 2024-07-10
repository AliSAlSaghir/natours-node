import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51PaZiKDPuQ7xaDVP7ERCmXTJfbVtsnlEn7MB9hP3ec7AlAl0EOnXFiJrSvcv0xXv6h2QF75Oy4pGk2zY0JWLFEHE00KYwTGPuN',
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios({
      method: 'GET',
      url: `/api/v1/bookings/checkout-session/${tourId}`,
    });
    const x = await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
