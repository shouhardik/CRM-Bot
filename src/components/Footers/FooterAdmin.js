import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-8/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                <center>Copyright © Code for Good {new Date().getFullYear()}{" "}</center>
                <a
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                <center>Developed by Team 2: DataX</center>
                </a>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4">
            <ul className="list-unstyled">
                    
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://ratnanidhi.org/photogallery/"
                      >
                        Photo Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://ratnanidhi.org/photogallery/"
                      >
                        Video Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="mailto:info@ratnanidhi.org"
                      >
                        E-mail us
                      </a>
                    </li>
                  </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
