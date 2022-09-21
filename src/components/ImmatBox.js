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
        <h3>SÉLECTIONNER VOTRE VÉHICULE:</h3>
        <div className="link-immat">
          <b>Link:</b> {country && lang ? link : "..."}
        </div>
        <br />
        <br />
        <label>Par plaque d'immatriculation</label>
        <span className="flag">🇨🇮</span>
        <div className="immatSear">
          <input type="text" placeholder="AB-325-CF" />
        </div>
        <br />
        <button>ENVOYER</button>
        <br /> <br />
        <p>ou</p>
        <br />
        <label>Par selection de mon véhicule</label>
        <div>
          <Select
            placeholder="Selectionner la marque"
            value={country}
            options={data}
            onChange={handleCountryChange}
            getOptionLabel={(x) => x.car}
            getOptionValue={(x) => x.car_code}
          />

          <br />
          <Select
            placeholder="Selectionner le modèl"
            value={lang}
            options={langList}
            onChange={handleLanguageChange}
            getOptionLabel={(x) => x.name}
            getOptionValue={(x) => x.code}
          />
          <br />

          <Select
            placeholder="Selectionner la motorisation"
            value={lang}
            options={langList}
            onChange={handleLanguageChange}
            getOptionLabel={(x) => x.name}
            getOptionValue={(x) => x.code}
          />
          <br />
          <button>ENVOYER</button>
        </div>
      </div>
    </ImmatBoxDiv>
  );
};

export default ImmatBox;
