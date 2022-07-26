/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import "react-slideshow-image/dist/styles.css";
import "../assets/styles/slideshow.css";

const fadeImages = [
  "https://ratnanidhi.org/slider_image/166753589_MGM%20Award%20copy.jpg",
  "https://ratnanidhi.org/slider_image/388769830_Mission%20Million%20Books%20RevisedF.jpg",
  "https://ratnanidhi.org/slider_image/477931508_1731151277_Google%20awardF.jpg"
];

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Ratna Nidhi Charitable Trust
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                <div className="introtext">
              Ratna Nidhi Charitable Trust is committed to the welfare of people from the most underprivileged strata of society without distinction of caste, creed or color. Its emphasis is on assisting the children and youth who are the citizens of tomorrow and the disabled who need a support to help them join mainstream society.   
              </div></p>
              <div className="mt-12">
                <a
                  href="https://ratnanidhi.org/about-us/"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  About Us
                </a>
                <a
                  href="https://ratnanidhi.org/Projects/"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Our Projects
                </a>
                <a
                  href="https://ratnanidhi.org/reports/"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Reports
                </a>
                <a
                  href="https://ratnanidhi.org/News/"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  News
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
                  alt="..."
                  height="300px"
                  width="300px"
                  right-margin="40px"
                  src="data:image/png;base64,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"
                />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://imgmedia.lbb.in/media/2019/11/5de231651d023c2fc653779a_1575104869033.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                  <center>OUR MISSION</center>
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  Ratna Nidhi Charitable Trust is committed to the welfare of people from the most underprivileged strata of society without distinction of caste, creed or color. Its emphasis is on assisting the children and youth who are the citizens of tomorrow and the disabled who need a support to help them join mainstream society.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      OUR CREDIBILITY
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      We have received many prestigious awards like The Rubin Museum Award, Share and care Award, BCI Award, IJS USA Award, JAINA Award World of Children Award and also our work is appreciated by great dignitaries.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      OUR OUTREACH
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      We have mobile hospital vans with we can reach out to remotest region providing appliances at door steps of the disabled
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">OUR SERVICE</h6>
                      <p className="mb-4 text-blueGray-500">
                      We take measurements & provide appliances within 4-5 hours so that the beneficiaries can begin walking on the very same day. Our meals go to the poorest of schools, Balwadis and Anganwadis that are not supported by the government's Mid-Day meal program.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      OUR POTENTIAL
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      We have organized the biggest mobility camp in 2009 at Palitana, benefiting over 28,000 beneficiaries at a time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-12/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                OUR RECENT PROJECTS
              </h3>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/health-and-disability"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >HEALTH AND MOBILITY</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/food-for-education"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >FOOD FOR EDUCATION</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/vision-10000"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >VISION 10000</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/mission-million-khichhdi"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >MISSION MILLION KHICHHDI</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/cyclothone"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >CYCLOTHONE</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/donation-in-kind"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >DONATION IN KIND</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/mission-million-library/library/"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >RATNA NIDHI LIBRARY</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/educational-sponsorships"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >EDUCATIONAL SPONSORSHIPS</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/book-donation"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >BOOK DONATION</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/tata-mumbai-marathon"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >MUMBAI MARATHON</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/disaster-relief"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >DISASTER RELIEF</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/garment-distribution"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >GARMENT DISTRIBUTION</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/medical-camps"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >MEDICAL CAMPS IN INDIA</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/paintings"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >PAINTINGS</a>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <a
                href="https://ratnanidhi.org/Category/other-projects"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >OTHER PROJECTS</a>
                </span>
              </div>
            </div>
          </div>


  

          {/* <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4"> */}


              <br></br>
              <br></br>
              <br></br>

              <div className="slide-container">
                <Fade>
                  <div className="each-fade">
                    <img src={fadeImages[0]} />
                  </div>
                  <div className="each-fade">
                    <img src={fadeImages[1]} />
                  </div>
                  <div className="each-fade">
                    <img src={fadeImages[2]} />
                  </div>
                </Fade>
              </div>
                  
                  {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        NextJS
                      </p>
                    </div>
                  </a> */}
                </div>
                {/* <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16"> */}
                  {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                    </div>
                  </a> */}
                {/* </div>
              </div>
            </div> */}

            {/* <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48"> */}
              {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div> */}
              {/* <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Javascript Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p> */}
              {/* <div className="block pb-6"> */}
                {/* <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Alerts
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Dropdowns
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Modals
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Popovers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tabs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tooltips
                </span> */}
              {/* </div> */}
              {/* <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a> */}
            {/* </div>
          </div> */}
        {/* </div> */}

        {/*<div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12"> */}
                {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div> */}
                {/* <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p> */}
                {/* <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul> */}
              {/* </div>
            </div>  */}

            {/* <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              {/* <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              /> 
            </div>
          </div>
        </div> */}

        {/* <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            {/* <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2> */}
            {/* <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Notus React is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p> 
          </div>
        </div> */}
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        {/* <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4"> */}
                  {/* <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/login.jpg").default}
                      />
                    </div>
                  </Link> */}
                {/* </div> */}

                {/* <div className="w-full lg:w-4/12 px-4"> */}
                  {/* <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/profile.jpg").default}
                      />
                    </div>
                  </Link> */}
                {/* </div> */}

                {/* <div className="w-full lg:w-4/12 px-4"> */}
                  {/* <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/landing.jpg").default}
                      />
                    </div>
                  </Link> */}
                {/* </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        {/* <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center"> */}
            {/* <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div> */}

            {/* <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div> */}
          {/* </div>
        </div> */}
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        {/* <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
               Would you like to join our noble cause?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://ratnanidhi.org/Donate"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Donate Now!
                </a>
                {/* <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a> */}
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
