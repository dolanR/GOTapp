import { useRef, useState, useEffect } from "react";

export default function Characters(props) {
  const search = useRef(null);
  const { data, setData } = props;

  async function submitSearch() {
    if (search.current.value == "") return;
    const url =
      "https://www.anapioficeandfire.com/api/characters?name=" +
      search.current.value;
    fetch(url)
      .then((res) => res.json())
      .then((searchData) => {
        setData(searchData);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='flex flex-col gap-2 max-w-[80vw]'>
      <div className='w-full flex gap-2'>
        <input
          placeholder='Exact character name, case sensitive'
          className='focus:outline-none w-full text-xs md:text-base pl-2
          bg-opacity-80 bg-stone-200 rounded'
          ref={search}
        ></input>
        <button
          type='submit'
          className='bg-red-100 p-1 text-xs md:text-base rounded'
          onClick={() => submitSearch()}
        >
          Search
        </button>
      </div>
      {data.map((char, index) => {
        const keys = Object.keys(char).filter((element) => {
          if (
            element == "books" ||
            element == "povBooks" ||
            element == "url" ||
            element == "allegiances" ||
            element == "aliases" ||
            element == "father" ||
            element == "mother" ||
            element == "spouse" ||
            !char[element] ||
            char[element][0] == ""
          ) {
            return false;
          } else {
            return true;
          }
        });

        return (
          <div
            key={index}
            className='bg-stone-200 bg-opacity-60 p-2 font-medieval'
          >
            <h1 className='font-bold md:text-3xl text-xl'>
              {char.aliases?.join(", ") || char.name}
            </h1>
            {keys.map((keyName) => {
              return (
                <div key={keyName} className='font-extrabold md:text-xl'>
                  {keyName} :{" "}
                  <span className='font-normal'>
                    {keyName === "tvSeries" ||
                    keyName === "titles" ||
                    keyName === "playedBy"
                      ? char[keyName].join(", ")
                      : char[keyName]}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
