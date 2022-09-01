import { useEffect, useState } from "react";
import Container from "./Components/Container";

function App() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([{}]);
  const [search, setSearch] = useState("");

  const makeRequest = () =>{
    fetch(
      `https://pixabay.com/api/?key=18044207-8f26c4ccddbd06610dd46486c&q=${search}&image_type=all&pretty=true&per_page=30`
    )
      .then((res) => res.json())
      .then((dt) => {
        setData(dt.hits);
        setLoad(true)
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  useEffect(() => {
    makeRequest()
  }, []);
  return (
    <div className="bg-slate-100 flex flex-col justify-start items-center">
      <div className="w-full sm:w-3/5 lg:w-1/2 p-5 flex flex-row justify-between">
        <input 
        className="bg-white basis-full h-10 px-1 pl-15px outline-none rounded-l-md"
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
        />
        <button
        className="bg-green-600 p-1 px-3 text-white font-semibold text-xl rounded-r-md"
        onClick={()=>{
          setData([])
          makeRequest();
        }}
        >
          Search
        </button>
      </div>
      {
        load ?
        <Container data={data} />
        : <p className="text-2xl"> Loading... </p>
      }
    </div>
  );
}

export default App;
