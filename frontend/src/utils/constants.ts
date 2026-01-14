export const SORT_OPTIONS = [
  { value: "price-asc", label: "Fiyata Göre Artan" },
  { value: "price-desc", label: "Fiyata Göre Azalan" },
  { value: "rating-asc", label: "Oylamaya Göre Artan" },
  { value: "rating-desc", label: "Oylamaya Göre Azalan" },
];

export const INITIAL_VALUES = {
  name: "",
  description: "",
  location: "",
  price_per_night: "",
  rating: "",
  amenities: "",
  availability: false,
  address: "",
};

export const INPUT_FIELDS = [
  { name: "name", placeholder: "İsim" },
  { name: "description", placeholder: "Açıklama" },
  { name: "location", placeholder: "Konum" },
  { name: "price_per_night", placeholder: "Günlük Fiyat" },
  { name: "rating", placeholder: "Oylama" },
  { name: "amenities", placeholder: "Hizmetler" },
  { name: "availability", type: "checkbox", label: "Mevcutluk" },
  { name: "address", placeholder: "Adres" },
];
