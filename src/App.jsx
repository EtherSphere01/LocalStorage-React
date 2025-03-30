import { Suspense } from "react";
import "./App.css";
import Phones from "./phones/Phones";

function App() {
  const fetch_phones = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/EtherSphere01/Test-JSON-Data/refs/heads/main/phone_data.JSON"
    );
    const phones = await response.json();
    return phones;
  };

  const phones_data = fetch_phones();
  return (
    <>
      <h1>Welcome To The Cart</h1>
      <h2>Shopping Cart</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Phones phones_data={phones_data}></Phones>
      </Suspense>
    </>
  );
}

export default App;
