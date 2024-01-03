const LandingPage = () => {
  return (
    <div className=" h-full w-full bg-gradient-to-r from-cyan-200 to-blue-200">
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className=" font-sans antialiased text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Welcome to the best books library{" "}
          <span className=" text-sky-500">out there</span>!
        </h1>
        <p className=" mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Booksite We have the largest collection of modern, classic,
          and other genre books.
        </p>
      </div>
      <div className=" h-1/3 mx-auto bg-gradient-to-r from-sky-300 to-blue-200 flex flex-col items-center justify-center shadow-lg">
        <div className=" flex flex-row lg:w-2/3 sm:w-3/4 w-full h-full items-center justify-around gap-8">
          <div className=" flex flex-col  h-4/5 w-[32%] items-center justify-start rounded-lg shadow-md hover:scale-105 transition-all">
            <div className=" h-20 w-20 bg-slate-200 flex flex-col items-center justify-center rounded-full">
              {" "}
              <img
                className=" w-12 h-12"
                src="https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png"
                alt=""
              />
            </div>
            <div className=" py-4">
              <h1 className=" text-center font-bold text-gray-900 font-sans antialiased text-lg">
                Upload your own books!
              </h1>
              <p className="mt-6 text-lg max-w-prose text-center">
                Become a real author! and get paid for your creation
              </p>
            </div>
          </div>

          <div className=" flex flex-col  h-4/5 w-[32%] items-center justify-start rounded-lg shadow-md hover:scale-105 transition-all">
            <div className=" h-20 w-20 bg-slate-200 flex flex-col items-center justify-center rounded-full">
              {" "}
              <img
                className=" w-12 h-12"
                src="https://cdn.imgbin.com/11/0/15/imgbin-computer-icons-report-fatality-analysis-reporting-system-eG4byy3eps0yNfnH6WTje3cYH.jpg"
                alt=""
              />
            </div>
            <div className=" py-4">
              <h1 className=" text-center font-bold text-gray-900 font-sans antialiased text-lg">
                Organize your digital library
              </h1>
              <p className="mt-6 text-lg max-w-prose text-center">
                Never forget to read a precious book!
              </p>
            </div>
          </div>

          <div className=" flex flex-col  h-4/5 w-[32%] items-center justify-start rounded-lg shadow-md hover:scale-105 transition-all">
            <div className=" h-20 w-20 bg-slate-200 flex flex-col items-center justify-center rounded-full">
              {" "}
              <img
                className=" w-12 h-12"
                src="https://www.freeiconspng.com/thumbs/museum-icon/museum-icon-9.png"
                alt=""
              />
            </div>
            <div className=" py-4">
              <h1 className=" text-center font-bold text-gray-900 font-sans antialiased text-lg">
                Giant library orderd by your genres
              </h1>
              <p className="mt-6 text-lg max-w-prose text-center mx-2">
                We have a giant library filled with all the best books
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
