import "./App.css";

function App() {
  const smartphones = [
    { brand: "motorola", modelName: "g86 power", releaseYear: 2022, price: 15000, os: "android" },
    { brand: "apple", modelName: "iPhone XR", releaseYear: 2015, price: 25000, os: "iOS" },
    { brand: "apple", modelName: "iPhone 15", releaseYear: 2025, price: 125000, os: "iOS" },
    { brand: "onePlus", modelName: "nord 5", releaseYear: 2023, price: 30000, os: "android" },
    { brand: "vivo", modelName: "x200", releaseYear: 2025, price: 60000, os: "android" },
  ];

  return (
    <div className='flex justify-center items-center bg-zinc-950 h-screen text-white'>
      <div className='flex flex-col gap-5 bg-rose-200 mx-6 p-6 container'>
        <div className='flex flex-col bg-sky-600 p-3'>
          <h1 className='text-4xl'>Products List</h1>
          <div className='mt-3'>
            <ul>
              {smartphones.map((smartphone, index) => {
                return (
                  <li index={index} className='inline-block mr-2'>
                    <div className='flex gap-y-2 mt-2'>
                      <p className='bg-white px-2 py-1 text-sky-600 cursor-pointer'>
                        {smartphone.brand}
                      </p>
                      <p className='px-2 py-1 border border-white cursor-pointer'>
                        {smartphone.modelName}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='space-x-2 bg-sky-600 px-2 py-1'>
            <label htmlFor='sortProductPrice'>Sort</label>
            <select className='bg-amber-600 rounded' name='sortProductPrice' id=''>
              <option value=''>Price</option>
              <option value='lowToHigh'>Low to High</option>
              <option value='highToLow'>High to Low</option>
            </select>
            <select className='bg-amber-600 rounded' name='sortProductPrice' id=''>
              <option value=''>Release Year</option>
              <option value='recent'>Newest</option>
              <option value='old'>Oldest</option>
            </select>
          </div>
          <div className='bg-sky-600 px-2 py-1'>filter</div>
        </div>
        <div className='flex justify-center bg-sky-600'>text</div>
      </div>
    </div>
  );
}

export default App;
