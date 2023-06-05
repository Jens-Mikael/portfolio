const Drawer = () => {
  return (
    <>
      {/* THE OPACITY EFFECT WHICH IS ALSO THE PARENT FOR THE DRAWER */}
      <div
        className={
          " fixed inset-0 z-10 transform overflow-hidden bg-slate-800 bg-opacity-25 duration-500 " +
          (isDrawerOpen
            ? "translate-x-0 opacity-100 transition-opacity  "
            : "translate-x-full opacity-0  transition-all ")
        }
      >
        {/* THE WHITE DRAWER ITSELF */}
        <div 
          className={
            " absolute right-0 h-full w-screen max-w-[15rem] transform  bg-white px-5 py-5 shadow-xl transition-transform duration-500  dark:bg-slate-900 " +
            (isDrawerOpen ? " translate-x-0" : " translate-x-full")
          }
        >
          {/* DRAWER CONTENT */}

          <div className="flex justify-between pb-10 text-xl font-bold">
            <div>MENU</div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="cursor-pointer transition hover:scale-110 dark:hover:opacity-70"
            >
              <svg
                className="h-7 fill-[#0f172a] dark:fill-[#e2e8f0]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
          <div className="text-center">{children}</div>
        </div>

        {/* CLOSE DRAWER BY CLICKING OUTIDE */}
        <div
          className=" h-full w-screen cursor-pointer "
          onClick={() => {
            setIsDrawerOpen(false);
          }}
        ></div>
      </div>
    </>
  );
};
