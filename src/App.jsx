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
          <h1 className="text-5xl sm:text-7xl font-bold tracking-wide text-black">
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

        <section className="-z-10 absolute animate-round w-[240vh] h-[240vh] bg-[conic-gradient(#222,#fff)]"></section>

        <aside className="absolute top-1/ bottom-7 sm:right-9 md:bottom-24 md:right-24 flex sm:flex-col gap-9 z-10">
          <a href="mailto:merndev0@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-9 h-9"
            >
              <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"></path>
            </svg>
          </a>

          <a
            href="http://github.com/Mohit-au50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-9 h-9"
            >
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>
          </a>
        </aside>
      </main>
    </>
  );
};

export default App;
