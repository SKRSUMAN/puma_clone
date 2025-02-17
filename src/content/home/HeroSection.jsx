"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <Image 
        src="https://cdn.sanity.io/images/qa41whrn/prod/c8eceafe1dc98ca1fe4a61668a32771008293a3e-2083x2708.jpg" 
        alt="Puma Product Image" 
        width={300} 
        height={300} className="border border-red-500"
      />
    </div>
  );
};

export default HeroSection;


//https://cdn.sanity.io/images/qa41whrn/prod/c8eceafe1dc98ca1fe4a61668a32771008293a3e-2083x2708.jpg

// https://cdn.sanity.io/images/qa41whrn/prod/922c74547f4f873f68dc9f71251e5fca764b425d-2083x2708.jpg

// https://cdn.sanity.io/images/qa41whrn/prod/922c74547f4f873f68dc9f71251e5fca764b425d-2083x2708.jpg
