"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const random = Math.floor(Math.random() * 100) + 1;

export default function Home() {
const [number, setNumber] = useState(10);
const decrase = () => {
  setNumber(number - 1);
};
const increase = () => {
    setNumber(number + 1);
};
function guess() {
  if (number < random) {
  alert("Too low");
} else if (number > random) {
  alert("Too high");
} else
if (number == random) {
  alert("You guessed right");
}
}

  return (
    
    <div className="bg-blue-500">
      {
        number
      }
      
      <button onClick={guess}>click2</button>
     
     <input type="text" onChange={(e)=>setNumber (e.target.value)} 
     
     />
    </div>
  );
}
