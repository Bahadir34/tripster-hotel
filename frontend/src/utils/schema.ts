import { number, object, string } from "yup";

let userSchema = object({
  name: string()
    .min(3)
    .max(40)
    .required("Ad alanı zorunludur.")
    .matches(/^[\p{L}\s]+$/u, "Ad alanı sadece harf ve boşluk içerebilir"),
  description: string().min(3).max(40).required("Açıklama alanı zorunludur."),
  location: string()
    .min(3)
    .max(40)
    .matches(/^[\p{L}\s]+$/u, "Konum alanı sadece harf ve boşluk içerebilir")
    .required("Konum alanı zorunludur"),
  price_per_night: number()
    .min(1)
    .max(99999)
    .required("Gecelil ücret alanı zorunludur"),
  rating: number().min(1).max(5).required("Puanlama alanı zorunludur"),
  amenities: string().min(3).max(80).required("Özellikler alanı zorunludur"),
  address: string().required("Adres alanı zorunludur"),
});

export default userSchema;
