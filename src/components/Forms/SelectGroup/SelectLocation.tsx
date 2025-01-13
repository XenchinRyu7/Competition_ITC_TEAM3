import React, { useState, useEffect } from "react";

const SelectLocation: React.FC = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [kelurahan, setKelurahan] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState<string>("");
  const [selectedKabupaten, setSelectedKabupaten] = useState<string>("");
  const [selectedKecamatan, setSelectedKecamatan] = useState<string>("");
  const [selectedKelurahan, setSelectedKelurahan] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  useEffect(() => {
    fetch("https://ibnux.github.io/data-indonesia/provinsi.json")
      .then((res) => res.json())
      .then((data) => setProvinsi(data));
  }, []);

  const loadKabupaten = (provinsiId: string) => {
    fetch(`https://ibnux.github.io/data-indonesia/kabupaten/${provinsiId}.json`)
      .then((res) => res.json())
      .then((data) => setKabupaten(data));
  };

  const loadKecamatan = (kabupatenId: string) => {
    fetch(
      `https://ibnux.github.io/data-indonesia/kecamatan/${kabupatenId}.json`
    )
      .then((res) => res.json())
      .then((data) => setKecamatan(data));
  };

  const loadKelurahan = (kecamatanId: string) => {
    fetch(
      `https://ibnux.github.io/data-indonesia/kelurahan/${kecamatanId}.json`
    )
      .then((res) => res.json())
      .then((data) => setKelurahan(data));
  };

  return (
    <div>
      <div className="">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Provinsi
        </label>
        <select
          value={selectedProvinsi}
          onChange={(e) => {
            setSelectedProvinsi(e.target.value);
            loadKabupaten(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="">- Pilih Provinsi -</option>
          {provinsi.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div className="">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Kabupaten
        </label>

        <select
          value={selectedKabupaten}
          onChange={(e) => {
            setSelectedKabupaten(e.target.value);
            loadKecamatan(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="">- Pilih Kabupaten -</option>
          {kabupaten.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div className="">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Kecamatan
        </label>
        <select
          value={selectedKecamatan}
          onChange={(e) => {
            setSelectedKecamatan(e.target.value);
            loadKelurahan(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="">- Pilih Kecamatan -</option>
          {kecamatan.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div className="">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Kelurahan
        </label>
        <select
          value={selectedKelurahan}
          onChange={(e) => {
            setSelectedKelurahan(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="">- Pilih Kelurahan -</option>
          {kelurahan.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectLocation;
