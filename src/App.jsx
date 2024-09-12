import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Getdata } from "./Data/fetchingData";
import Navbar from "./componants/navbar";
import Section from "./componants/main";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function App() {
  let [data, setdata] = useState();
  let [count, setCount] = useState(1);
  console.log(data);

  useEffect(() => {
    Getdata().then((d) => setdata(d.articles[0]));
  }, []);
  let Refrest = () => {
    if (data.source.name == "[Removed]") {
      Getdata().then((d) => setdata(d.articles[count + 1]));
      setCount(Number(count) + 1);
    } else {
      Getdata().then((d) => setdata(d.articles[count]));
      setCount(Number(count) + 1);
    }
    if (count === 20) {
      setCount(count - 1);
      Getdata().then((d) => setdata(d.articles[count - 1]));
      alert("Click Previous");
    }
  };
  const pre = () => {
    if (count === 1) {
      alert("Click Next");
    } else {
      setCount(count - 1);
      Getdata().then((d) => setdata(d.articles[count-2]));
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div style={{ display: "flex" }}>
        {data && <Section data={data} />}
        <div style={{ marginTop: "20px" }}>
          <button onClick={pre} class="button">
            <GrLinkPrevious />
            Previous
          </button>
          <button onClick={Refrest} class="button">
            Next
            <GrLinkNext />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
