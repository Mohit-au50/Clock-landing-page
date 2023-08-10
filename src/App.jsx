import React from "react";

const App = () => {
  return (
    <>
      <main className="relative overflow-hidden w-screen grid h-screen place-items-center">
        <header className="h-[5rem] w-full absolute top-0 flex justify-between items-center px-9 md:px-24">
          <h1 className="text-2xl sm:text-4xl text-white mix-blend-difference font-bold">
            Clocksmith
          </h1>
          <div className="hidden sm:flex sm:items-center sm:gap-14 font-semibold">
            <button className="text-white mix-blend-difference">Login</button>
            <button className="bg-white px-5 py-2 rounded mix-blend-difference">
              Signup
            </button>
          </div>
        </header>

        <section className="absolute md:left-24 p-7 top-1/ w-full md:w-1/3">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-wide text-black  ">
            The clock <br /> is
            <span className="text-white mix-blend-difference"> ticking</span>.
          </h1>
          <p className="my-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            beatae natus. In, ex. Praesentium nesciunt vitae libero illum.
          </p>
          <button className="px-7 py-2 border-2 text-white border-white mix-blend-difference font-semibold rounded">
            Read more
          </button>
        </section>

        <section className="-z-10 absolute animate-round  w-[240vh] h-[240vh] bg-[conic-gradient(#222,#fff)]"></section>
      </main>
    </>
  );
};

export default App;
