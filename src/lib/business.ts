// Single source of truth for Radha Pet Care business details.
// Edit these constants to update the whole website.

export const BUSINESS_NAME = "Radha Pet Care";
export const BUSINESS_NAME_HI = "राधा पेट केयर";

export const PHONE_DISPLAY = "077421 66189";
export const PHONE_TEL = "tel:07742166189";

export const WHATSAPP_NUMBER = "917742166189";

export const ADDRESS_LINES = [
  "G-3, near South Indian Bank,",
  "Block G, Sector 22,",
  "Noida, Uttar Pradesh 201307",
];

export const HOURS = "Open 24 Hours";

export const RATING = "4.6";
export const REVIEW_COUNT = 40;

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Radha+Pet+Care%2C+G-3%2C+near+South+Indian+Bank%2C+Block+G%2C+Sector+22%2C+Noida%2C+Uttar+Pradesh+201307";

export const MAPS_LISTING_URL =
  "https://www.google.com/maps/search/?api=1&query=Radha+Pet+Care+Sector+22+Noida";

export const SOCIAL_LINKS = {
  instagram: "#",
  facebook: "#",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Hello, I would like to know more about Radha Pet Care services.",
  boarding: "Hello, I would like to enquire about pet boarding.",
  consultation: "Hello, I would like to book a veterinary consultation.",
};
