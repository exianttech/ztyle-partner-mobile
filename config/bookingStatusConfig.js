export const bookingStatusConfig = {
    pending: {
        text: "Waiting for Confirmation",
        variant: "warning",
        textVariant: "textWarning",
        icon: "info-circle",
    },
    confirmed: {
        text: 'Booking Confirmed',
        variant: 'info',
        textVariant: "textInfo",
        icon:'thumbs-up'
    },
    canceledByUser: {
        text: "Canceled By User",
        variant: "danger",
        textVariant: "textDanger",
        icon: "times-circle",
    },
    canceledByBeautician: {
        text: "Canceled By Beautician",
        variant: "danger",
        textVariant: "textDanger",
        icon: "times-circle",
    },
    completed: {
        text: "Service Completed",
        variant: "success",
        textVariant: "textSuccess",
        icon: "check-circle",
    },
    
}