export default function Weather({ data }) {
  console.log({ data });
  const weather = data.weather[0];
  const image = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-bold">{data.name}</h3>
      <div className="flex items-center gap-4">
        <p className="text-primary font-bold text-7xl">
          {Math.round(data.main.temp)} C°
        </p>
        <img src={image} alt="" className="w-32 h-32" />
      </div>
      <div>
        <p className="text-2xl">
          🌄 Sunrise :{" "}
          <span className="font-bold">
            {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
        <p className="text-2xl">
          🌇 Sunset :{" "}
          <span className="font-bold">
            {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
      </div>
      {/* <iframe
        width="300"
        height="170"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://maps.google.com/maps?q=${data.coord.lat},${data.coord.lon}&hl=es&z=14&amp;output=embed`}
      ></iframe> */}
    </div>
  );
}
