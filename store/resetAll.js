import { resetAuth } from './auth/authSlice';
import { resetProfile } from './profile/profileSlice';
import { resetBooking } from './booking/bookingSlice';
import { resetPayment } from './payment/paymentSlice';
import { resetNotification } from './notification/notificationSlice';
import { resetReview } from './review/reviewSlice';


export const resetAll = () => (dispatch) => {
    
    dispatch(resetAuth())
    dispatch(resetProfile())
    dispatch(resetBooking())
    dispatch(resetPayment())
    dispatch(resetNotification())
    dispatch(resetReview())

}

