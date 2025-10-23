const getAddressLines = (address) => {
    
    if (!address || typeof (address) !== "string")return [];
        
    // Normalize: trim, collapse spaces around commas, collapse repeated commas
    const normalized = address
        .trim()
        .replace(/\s*,\s*/g, ",") // "a ,  b" -> "a,b"
        .replace(/,+/g, ",");     // "a,,b" -> "a,b"

  if (!normalized) return [];

  // If no commas present, keep the full string as a single line
  if (!normalized.includes(",")) return [normalized];

  // Split by comma and trim each part
  return normalized.split(",").map(s => s.trim()).filter(Boolean);

}

export default getAddressLines