import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "./api";
import type {
  FilterParams,
  Place,
  PlaceFormValues,
  PlaceResponse,
  PlacesResponse,
} from "../types";

// useQuery hookuna api isteginin ismini (queryKey) ve api istegini atan fonksiyon (queryFn) veririz.
// useQuery bizim icin api istegini atiyor ve gelen cevabin stateini yonetiyor
// isLoading, error, data gibi state'leri yonetiyor.
// Hata durumunda 3 kez istek atilir, 3 u de olumsuz ise isError statei dolar.
// api den gelen cevabi cache de saklar, bu sayede ayni istegi birden fazla komponentte tekrar api istegi atmadan kullanabiliriz.

export const usePlaces = (params?: FilterParams) => {
  return useQuery({
    queryKey: ["places", params], // ^ queryKey, sorguyu benzersiz kilar, params degistiginde sorgu yeniden tetiklenir
    queryFn: () => api.get<PlacesResponse>("/places", { params }),
    select: (res) => res.data.places, // ^ data state inin degerini belirtiyoruz, response u alip icinden data seceriz
    retry: 2, // ^ hata durumunda 5 kez deneme yap
    retryDelay: 1000, // ^ 1 saniye bekledikten sonra hata durumunda tekrar dene
    staleTime: 2 * 60 * 1000, // ^ 2 dakika boyunca cache de tutar, default degeri 0'dir
    gcTime: 5 * 60 * 1000, // ^ 5 dakika sonra cache den verileri siler.(Garbage Time)
  });
};

export const usePlace = (id: string | undefined) =>
  useQuery({
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`),
    select: (res) => res.data.place,
    enabled: !!id, // ! id varsa sorguyu calistir
  });

/* 
    ^ useQuery ile sadece sayfa yuklendigi anda atacagimiz isteklerin stateini yonetiriz.
    ^ Ama post, put, patch, delete gibi istekleri genelde sayfa yuklendigi anda degil de bir buton tiklandiginda atiyoruz.
    ^ Bu durumlarda ise useMutation hook unu kullaniriz.

    ^ useMutation hookuna api istegini atan fonksiyonu veririz (mutationFn).
        * > geriye api istegini atmaya yarayan mutate methodunu ve
        * > apiden gelen cevabin statinin return eder.
*/

export const useDeletePlace = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createPlace"], // ! mutationKey zorunlu degildir
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      // ^ arayuzden silinen elemanin gitmesi icin usePlaces sorgusu yeniden tetiklenmeli
      queryClient.invalidateQueries({ queryKey: ["places"] }); // bu sorguyu tekrardan tetikler
      alert("Place deleted successfully, refresh your page.");
    },
    onError: (error) => {
      alert(`Error deleting place.\n${error.message}`);
    },
  });
};

export const useCreatePlace = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createPlace"],
    mutationFn: (data: PlaceFormValues) =>
      api.post("/places", data, {
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["places"] });
      alert("Place created successfully!");
    },
    onError: (error) => {
      alert(`Error creating place.\n${error.message}`);
    },
  });
};
