import { useGetWeatherData } from "src/hooks/useGetWeatherData";
import { asideSelector } from "src/store/store";
import { useDispatch } from "react-redux";
import style from "./aside.module.scss";
import obl from "src/assets/obl.svg";
import sun from "src/assets/sun.svg";

export const Aside = () => {
  const dispatch = useDispatch();
  const asideIsOn = asideSelector((state) => state.isOn);
  const { weatherData } = useGetWeatherData();

  if (!weatherData) return <div>error</div>;

  const time = weatherData.hourly.time.slice(0, 24);
  const temp = weatherData.hourly.temperature_2m.slice(0, 24);
  const rain = weatherData.hourly.rain.slice(0, 24);

  return (
    <aside className={asideIsOn ? style.asideOn : style.asideOFF}>
      <button
        className={style.closeButton}
        onClick={() => dispatch({ type: "change" })}
      >
        &larr;
      </button>
      <h1 className={style.title}>Почасовой прогноз</h1>
      <p className={style.weatherBlock}>
        <span className={style.tetx}>Время</span>
        <span className={style.tetx}>Прогноз</span>
      </p>
      {time.map((time, index) => (
        <p key={index} className={style.weatherBlock}>
          <span className={style.tetx}>{new Date(time).getHours()}:00</span>
          <img
            className={style.img}
            src={rain[index] >= 1 ? obl : sun}
            alt={rain[index] >= 1 ? obl : sun}
          />
          <span className={style.tetx}>{temp[index]}*</span>
        </p>
      ))}
    </aside>
  );
};
