import React, { useState, useEffect } from "react";
import ImgCard from "./components/ImgCards";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [ter, setter] = useState("");
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=40249840-f897b78d2fe4cbcac6f80e5c8&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <div className="w-screen flex flex-col sm:flex-row items-center justify-between h-28 bg-slate-400 fixed inset-0">
        <div className="text-white text-3xl ml-3 text-center" >Image Gallery</div>
        <div>
        <input onChange={(e) => setter(e.target.value)}
          type="search"
          name="search"
          id="search"
          placeholder="Search Anything...."
          className="w-1/2 sm:w-25 outline-none border border-slate-300 h-10 p-5 m-5 bg-white rounded-lg "
        />
        <button className="border border-white rounded-lg bg-white px-2 py-1 sm:mr-10 text-lg " onClick={() => {setTerm(ter);document.getElementById('search').value = ""}}>Enter</button>
        </div>
      </div>
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text-4xl mt-44">No Results Found!</h1>
      )}
      {isLoading ? (
        <h1 className="text-center text-4xl mt-44">Loading.....</h1>
      ) : (
        <main className="mt-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
          {images.map((image) => (<ImgCard key={image.id} image={image} />))}
        </main>
      )}
    </>
  );
}
export default App;
