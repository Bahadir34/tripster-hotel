import React, { useMemo, type FC } from "react";
import { usePlaces } from "../../service";
import { SORT_OPTIONS } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data, isLoading, isError, refetch } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();

  // otellerin konum degerlerinden olusan benzersiz bir liste olustur
  const locations = useMemo(() => {
    if (!data) return [];
    return Array.from(new Set(data.map((place) => place.location)));
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const params: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (value && value.toString() !== "Seçiniz") {
        params[key] = value.toString();
      }
    });
    setSearchParams(params);
  };

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <form
      onReset={handleReset}
      onChange={handleChange}
      className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10"
    >
      <div className="field">
        <label htmlFor="location">Nereye Gitmek Istiyorsunuz</label>
        <select
          name="location"
          id=""
          className="input"
          defaultValue={"Seçiniz"}
        >
          <option value={"Seçiniz"}>Seçiniz</option>
          {data &&
            locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="location">Konaklama Yeri Adına Göre Ara</label>
        <input
          name="title"
          type="text"
          className="input"
          placeholder="örn: Seaside Villa"
        />
      </div>

      <div className="field">
        <label htmlFor="location">Sıralama Ölçütü</label>
        <select name="order" id="" className="input" defaultValue={"Seçiniz"}>
          <option value="Seçiniz">Seçiniz</option>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="reset"
        className="bg-blue-500 hover:bg-blue-600 transition text-white   p-1.5 cursor-pointer rounded-md"
      >
        Filtreleri Temizle
      </button>
    </form>
  );
};

export default Filter;
