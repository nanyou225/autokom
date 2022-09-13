import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from "../carSelect.json";
import { ImmatBoxDiv } from "./ImmatBox.elements";

const ImmatBox = () => {
  const [country, setCountry] = useState(null);
  const [lang, setLang] = useState(null);
  const [langList, setLangList] = useState([]);
  const [link, setLink] = useState("");
  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setCountry(obj);
    setLangList(obj.languages);
    setLang(null);
  };
  // handle change event of the language dropdown
  const handleLanguageChange = (obj) => {
    setLang(obj);
  };
  // generate the link when both dropdowns are selected
  useEffect(() => {
    if (country && lang) {
      setLink(
        `https://www.${country.url}/search?q=Clue+Mediator&gl=${country.car_code}&hl=${lang.code}`
      );
    }
  }, [country, lang]);

  return (
    <ImmatBoxDiv>
      <div className="immat-div">
        <h2>Sélectionnant mon véhicule</h2>
        <span className="link-immat">
          <b>Link:</b> {country && lang ? link : "XXXXX"}
        </span>
        <br />
        <h3>Par plaque d'immatriculation</h3>
        <br />
        <div className="immat">
          <input type="text" placeholder="AB-325-CF" />
        </div>
        <br />
        <br />
        <h3>Par véhicule</h3>
        <br />
        <div>
          <b>Marque</b>
          <Select
            placeholder="Selectionner la marque"
            value={country}
            options={data}
            onChange={handleCountryChange}
            getOptionLabel={(x) => x.car}
            getOptionValue={(x) => x.car_code}
          />

          <b>Model</b>
          <Select
            placeholder="Selectionner le modèl"
            value={lang}
            options={langList}
            onChange={handleLanguageChange}
            getOptionLabel={(x) => x.name}
            getOptionValue={(x) => x.code}
          />
          <b>Motorisation</b>
          <Select
            placeholder="Selectionner la motorisation"
            value={lang}
            options={langList}
            onChange={handleLanguageChange}
            getOptionLabel={(x) => x.name}
            getOptionValue={(x) => x.code}
          />
        </div>
        <br />
        <button>VALIDER</button>
      </div>
    </ImmatBoxDiv>
  );
};

export default ImmatBox;
