"use client";

import { MoveLeft } from "lucide-react";
import { useRef, useState } from "react";
type Category = "Fruit" | "Vegetable";
type Location = "Main" | Category;
interface Item {
  id: number;
  type: Category;
  name: string;
  location: Location;
}
const data: Item[] = [
  {
    id: 1,
    type: "Fruit",
    name: "Apple",
    location: "Main",
  },
  {
    id: 2,
    type: "Vegetable",
    name: "Broccoli",
    location: "Main",
  },
  {
    id: 3,
    type: "Vegetable",
    name: "Mushroom",
    location: "Main",
  },
  {
    id: 4,
    type: "Fruit",
    name: "Banana",
    location: "Main",
  },
  {
    id: 5,
    type: "Vegetable",
    name: "Tomato",
    location: "Main",
  },
  {
    id: 6,
    type: "Fruit",
    name: "Orange",
    location: "Main",
  },
  {
    id: 7,
    type: "Fruit",
    name: "Mango",
    location: "Main",
  },
  {
    id: 8,
    type: "Fruit",
    name: "Pineapple",
    location: "Main",
  },
  {
    id: 9,
    type: "Vegetable",
    name: "Cucumber",
    location: "Main",
  },
  {
    id: 10,
    type: "Fruit",
    name: "Watermelon",
    location: "Main",
  },
  {
    id: 11,
    type: "Vegetable",
    name: "Carrot",
    location: "Main",
  },
];
const AutoDeleteToDoList: React.FC = () => {
  const [items, setItems] = useState(data);
  const timers = useRef<Record<number, NodeJS.Timeout>>({});
  const moveToCategory = (itemId: number, category: Category) => {
    // clear old timer if exists
    if (timers.current[itemId]) {
      clearTimeout(timers.current[itemId]);
    }

    // move item
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, location: category } : item,
      ),
    );

    // set new timer
    timers.current[itemId] = setTimeout(() => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, location: "Main" } : item,
        ),
      );
    }, 5000);
  };
  const moveBackToMain = (itemId: number) => {
    // stop timer
    clearTimeout(timers.current[itemId]);

    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, location: "Main" } : item,
      ),
    );
  };

  return (
     <div className="flex flex-col flex-1 justify-center items-center bg-zinc-50 font-sans dark:bg-black p-2">
      <main className="flex flex-1 w-full max-w-5xl flex-col py-5 bg-white dark:bg-black sm:items-start">
        <a href="/" className="p-2 px-2 text-gray-500 font-bold flex gap-2"><MoveLeft /> Back to main</a>
    <div className="flex justify-center gap-4 w-full">
      <div className="w-1/3 gap-2 flex flex-col">
        {items
          .filter((item) => item.location === "Main")
          .map((item) => (
            <button
              key={item.id}
              className="p-3 border border-gray-300 rounded-lg w-full text-center"
              onClick={() => moveToCategory(item.id, item.type as Category)}
            >
              <span className="text-lg font-semibold">{item.name}</span>
            </button>
          ))}
      </div>
      <div className="w-1/2 grid grid-cols-2 gap-4">
        <div className="col-span-1 border border-gray-300 rounded-lg">
          <h3 className="text-md p-2 font-bold bg-gray-100 text-center">Fruits</h3>
          <div className=" gap-2 flex flex-col p-2">
          {items
            .filter((item) => item.location === "Fruit")
            .map((item) => (
            <button
              key={item.id}
              className="p-3 border border-gray-300 rounded-lg w-full text-center"
              onClick={() => moveBackToMain(item.id)}
            >
              <span className="text-lg font-semibold">{item.name}</span>
            </button>
            ))}
            </div>
        </div>
        <div className="col-span-1 border border-gray-300 rounded-lg">
          <h3 className="text-md p-2 font-bold bg-gray-100 text-center">Vegetables</h3>
          <div className=" gap-2 flex flex-col p-2">
         {items
            .filter((item) => item.location === "Vegetable")
            .map((item) => (
            <button
              key={item.id}
              className="p-3 border border-gray-300 rounded-lg w-full text-center"
              onClick={() => moveBackToMain(item.id)}
            >
              <span className="text-lg font-semibold">{item.name}</span>
            </button>
            ))}
            </div>
        </div>
      </div>
    </div>
    </main>
    </div>
  );
};

export default AutoDeleteToDoList;
