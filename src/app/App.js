import { CityList } from "../entities/City";

const sities = [
  {
    id: 1, name: "Москва", country: "Россия",
  },
  {
    id: 2, name: "Белград", country: "Сербия",
  },
  {
    id: 3, name: "София", country: "Болгария",
  },
  {
    id: 4, name: "Черногория", country: "Подгорица",
  }
]

const App = () => {
  return (
    <div className="App">
      <CityList cities={sities} />
    </div>
  );
}

export default App;
