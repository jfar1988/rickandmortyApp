import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Location from "./componets/Location";
import ResidentInfo from "./componets/ResidentInfo";
import Error from "./componets/Error";

function App() {
  const [url, setUrl] = useState();
  const [locationInput, setLocationInput] = useState(1);

  const idLocation = Math.floor(Math.random() * 126) + 1;

  useEffect(() => {
    let URL;
    // (locationInput>0 && locationInput<126)?console.log("hola mundo"):console.log("chao mundo");
    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`;
    } else {
      URL = `https://rickandmortyapi.com/api/location/${idLocation}`;
    }
    axios
      .get(URL)
      .then((res) => setUrl(res.data))
      .catch((err) => console.log(err));
  }, [locationInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationInput(e.target.inputSearch.value);
  };

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <input id="inputSearch" type="text" />
        <button>Search</button>
      </form> */}
      <Location
        url={url}
        locationInput={locationInput}
        handleSubmit={handleSubmit}
      />
      {locationInput > 0 && locationInput < 127 ? (
        <div className="residente_info">
          {url?.residents.map((url) => (
            <ResidentInfo key={url} url={url} />
          ))}
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default App;
