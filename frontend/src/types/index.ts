interface Place {
  id: string;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}

interface PlaceFormValues {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating?: number;
  price_per_night?: number;
  availability: boolean;
}

interface PlacesResponse {
  message: string;
  places: Place[];
  results: number;
}

interface PlaceResponse {
  message: string;
  place: Place;
}

interface FilterParams {
  location?: string;
  title?: string;
  sort?: "price_asc" | "price_desc" | "rating_asc" | "rating_desc";
}

export {
  type Place,
  type PlacesResponse,
  type FilterParams,
  type PlaceResponse,
  type PlaceFormValues,
};
