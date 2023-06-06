"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-6 w-6" />;
  return (
    <button
      className="h-6 w-6 flex items-center justify-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <svg
            className="h-6 fill-slate-50 transition-colors hover:fill-rose-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
          </svg>
        </>
      ) : (
        <>
          <svg
            className="h-6 fill-slate-800 transition-colors hover:fill-rose-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256,149.333A106.667,106.667,0,1,0,362.667,256,106.787,106.787,0,0,0,256,149.333ZM256,320a64,64,0,1,1,64-64A64.073,64.073,0,0,1,256,320Z" />
            <path d="M256,106.667a21.333,21.333,0,0,0,21.333-21.333V42.667a21.333,21.333,0,1,0-42.667,0V85.333A21.333,21.333,0,0,0,256,106.667Z" />
            <path d="M256,405.333a21.333,21.333,0,0,0-21.333,21.333v42.667a21.333,21.333,0,1,0,42.667,0V426.667A21.333,21.333,0,0,0,256,405.333Z" />
            <path d="M376.679,156.654a21.268,21.268,0,0,0,15.085-6.248l30.171-30.171a21.334,21.334,0,1,0-30.171-30.171l-30.171,30.171a21.333,21.333,0,0,0,15.085,36.419Z" />
            <path d="M120.236,361.594l-30.171,30.17a21.333,21.333,0,1,0,30.169,30.171l30.171-30.17a21.333,21.333,0,1,0-30.169-30.171Z" />
            <path d="M469.333,234.667H426.667a21.333,21.333,0,1,0,0,42.667h42.667a21.333,21.333,0,1,0,0-42.667Z" />
            <path d="M106.667,256a21.333,21.333,0,0,0-21.333-21.333H42.667a21.333,21.333,0,1,0,0,42.667H85.333A21.333,21.333,0,0,0,106.667,256Z" />
            <path d="M391.764,361.594a21.333,21.333,0,0,0-30.169,30.171l30.171,30.17a21.333,21.333,0,1,0,30.169-30.171Z" />
            <path d="M120.235,150.406a21.334,21.334,0,0,0,30.171-30.171L120.235,90.065a21.334,21.334,0,1,0-30.171,30.171Z" />
          </svg>
        </>
      )}
    </button>
  );
};

export default ThemeModeToggle;
