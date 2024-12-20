
import './App.css'
import { InputWithButton } from './comps/InputBox'
import { useState, useEffect } from "react";
import { CardWithForm } from './comps/Cards';

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    let authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
      });
  }, []);

  async function search() {
    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    // Get Artist
    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log("Search Input: " + searchInput);
    console.log("Artist ID: " + artistID);
    await fetch(
      "https://api.spotify.com/v1/artists/" +
      artistID +
      "/albums?include_groups=album&market=US&limit=50",
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.items);
      });
  }




  return (
    <div >
      <div className='w-64 mx-auto'>
        <InputWithButton
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              search();
            } //search function
          }}
          onChange={(event) => setSearchInput(event.target.value)}
          onClick={search}

        >

        </InputWithButton>
      </div>

      <div className="mt-7 flex flex-wrap justify-center items-stretch gap-4"> {/* Adjusted alignment */}
        {albums.map((album) => {
          return (
            <CardWithForm
              key={album.id}
              name={album.name}
              imageUrl={album.images[0]?.url}
              releaseDate={album.release_date}
              spotifyUrl={album.external_urls.spotify}
            />
          );
        })}
      </div>



    </div>


  )
}

export default App


