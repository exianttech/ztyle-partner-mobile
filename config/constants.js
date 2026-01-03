const baseUrl = 'http://192.168.1.5:5000'

// const baseUrl ='http://localhost:5000'

export const Constants = {
    baseUrl,
    // auth
    url_register: baseUrl + '/api/auth/beautician-register',
    url_login: baseUrl + '/api/auth/beautician-login',
    url_request_reset_password: baseUrl + '/api/auth/beautician-request-reset-password',
    url_shop_ids: baseUrl + '/api/auth/shop-ids',
    // profile
    url_my_profile: baseUrl + '/api/beautician-profile/beautician-profiles/my-profile',
    url_profiles: baseUrl + '/api/beautician-profile/beautician-profiles',
    url_beautician_profiles_profile_pic: baseUrl + '/api/beautician-profile/beautician-profiles/profile-pic',
    // booking
    url_my_bookings: baseUrl + '/api/booking/beautician-bookings/my-bookings',
    url_bookings: baseUrl + '/api/booking/beautician-bookings',
    // payment
    url_payments_by_booking_id: baseUrl + '/api/payment/beautician-payments/by-booking',
    // notification
    url_notifications: baseUrl + '/api/notification/beautician-notifications',
    url_read_notifications: baseUrl + '/api/notification/beautician-read-notifications',
    // review
    url_beautician_reviews_by_beautician: baseUrl + '/api/review//reviews/beautician/by-beautician',
}
