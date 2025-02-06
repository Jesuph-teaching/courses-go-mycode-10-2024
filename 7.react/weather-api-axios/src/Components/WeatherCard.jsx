import useFetch from "../hooks/useFetch";
import Weather from "./Weather";
const apiKey = "a5e21b733de177ee1b009534d259bdbe";
export default function WeatherCard() {
  const { data, error, execute, loading, search, setSearch } = useFetch();
  const path = `/weather?q=${search}&appid=${apiKey}&units=metric`;
  return (
    <div className="card bg-base-200 shadow-2xl max-w-4xl my-6 mx-auto">
      <div className="card-body">
        <form
          className="flex flex-col gap-4 w-full mx-auto py-12"
          onSubmit={async (e) => {
            e.preventDefault();
            execute(path);
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="search">Search your city</label>
            <input
              type="search"
              id="search"
              name="search"
              className="input w-full"
              value={search}
              onChange={(e) => {
                setSearch(e.currentTarget.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-outline btn-primary">
            submit
          </button>
        </form>

        <div className="flex flex-col items-center">
          {loading ? (
            <span className="loading loading-spinner text-secondary loading-lg"></span>
          ) : (
            <>
              <p>{data ? <Weather data={data} /> : null}</p>
              <p>
                {error ? (
                  <p className="text-red-500">
                    {error.message || "Unknown error"}
                  </p>
                ) : null}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
