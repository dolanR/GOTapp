export default function Books(props) {
  const { data } = props;
  return (
    <div className='flex flex-col gap-2 p-2 max-w-[80vw]'>
      {data &&
        data.map((book, index) => {
          const keys = Object.keys(book).filter((element) => {
            if (
              element == "name" ||
              element == "povCharacters" ||
              element == "characters" ||
              element == "url" ||
              element == "mediaType" ||
              element == "country"
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
                {index + 1} : {book.name}
              </h1>
              {keys.map((keyName) => {
                return (
                  <div key={keyName} className='font-extrabold md:text-xl'>
                    {keyName} :{" "}
                    <span className='font-normal'>
                      {keyName === "released"
                        ? new Date(book[keyName]).toLocaleDateString()
                        : keyName === "authors" && book[keyName].length > 1
                        ? book[keyName].join(", ")
                        : book[keyName]}
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
