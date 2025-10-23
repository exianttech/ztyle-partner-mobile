const getStandardTime = (time) => {
    
    if (!time || typeof time !== "string") return "";
    
    let [hours, minutes] = time.split(":").map(Number);
    let meridian = "AM";
    
    if (hours === 0) {
        // Midnight hour
        hours = 12;
        meridian = "AM";
    }
    else if (hours > 12) {
        hours -= 12;
        meridian = "PM"
    }
    else if (hours === 12) {
        // Noon hour
        meridian = "PM"
    }

    return `${hours}:${minutes.toString().padStart(2, "0")} ${meridian}`

}


export default getStandardTime