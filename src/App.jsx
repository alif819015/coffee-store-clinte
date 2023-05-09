
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./componenets/CoffeeCard";
import { useState } from "react";

function App() {
const loadedCoffees = useLoaderData();
const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <div className="m-20">
      <h3 className="text-purple-600 text-5xl text-center my-20"> Hot Coffee: {coffees.length}</h3>
      <div className="grid md:grid-cols-2 gap-4">
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} ></CoffeeCard>)
      }
      </div>
    </div>
  );
}

export default App;
