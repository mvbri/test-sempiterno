"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense, useState } from "react";
import InputSearch from "@/app/components/InputSearch";

function Nav({ input = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathName = usePathname();
  return (
    <nav className="block w-full max-w-[1600px] px-4 py-2 mx-auto bg-white shadow-md rounded-md lg:px-8 lg:py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <Link
          href="/"
          className="mr-8 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          Buscador de Libros
        </Link>

        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link
                href="/favoritos"
                className={`flex items-center ease-in hover:text-red-400 ${
                  pathName === "/favoritos" ? "text-red-700" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span className="pl-1">Favoritos</span>
              </Link>
            </li>
          </ul>
        </div>
        {input ? (
          <Suspense>
            <InputSearch />
          </Suspense>
        ) : null}

        {/* Botón de menú para pantallas pequeñas (mobile) */}
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
          onClick={handleToggleMenu}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Menú de navegación para pantallas pequeñas (mobile) */}
      <div
        className={`transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col p-4">
          <li className="flex items-center p-2 text-sm text-slate-600">
            <Link
              href="/favoritos"
              className={`flex items-center ease-in hover:text-red-400 ${
                pathName === "/favoritos" ? "text-red-700" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span className="pl-1">Favoritos</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
