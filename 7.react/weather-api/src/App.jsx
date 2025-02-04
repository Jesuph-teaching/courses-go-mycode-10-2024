import { useEffect } from "react";
import { useState } from "react";
const apiKey = "a5e21b733de177ee1b009534d259bdbe";
function App() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
  useEffect(() => {
    if (error) {
      setData(null);
    }
  }, [error]);
  useEffect(() => {
    if (data) {
      setError(null);
    }
  }, [data]);
  return (
    <>
      <form
        className="flex flex-col gap-4 max-w-xl mx-auto py-12"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const response = await fetch(url);
          console.log(response);
          if (response.status === 200) {
            const data = await response.json();
            setData(data);
          } else {
            const data = await response.json();
            setError(data);
          }
          setLoading(false);
        }}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="search">Search your city</label>
          <input
            type="search"
            id="search"
            name="search"
            className="border"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
          />
        </div>
        <button type="submit" className="border">
          submit
        </button>
      </form>

      <div className="flex flex-col items-center">
        {loading ? (
          <span className="loader" />
        ) : (
          <>
            <p>{data ? JSON.stringify(data) : null}</p>
            <p>{error ? JSON.stringify(error) : null}</p>
          </>
        )}
      </div>
    </>
  );
}

export default App;
