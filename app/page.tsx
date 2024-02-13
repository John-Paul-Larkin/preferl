import Image from "next/image";
import Rocket from "@/public/rocket-lunch.svg";
import Socials from "@/components/Socials";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <main>
      <div className="  max-w-[1400px] mx-auto bg-slate-500... ">
        <div className="min-h-screen ">
          <div className="bg-[#1e293b] flex justify-between mb-4 py-4 rounded-lg mt-2 ">
            {/* <div className="bg-pink-200... text-2xl flex items-center justify-center border-b-4 border-indigo-500 mb-4">
            <h1>Candidate Database: Account Executive</h1>
          </div> */}

            <div className="flex ml-16">
              <div className="bg-red-400... mr-4">
                <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="50" fill="white">
                  <path d="M18,8.5a2.5,2.5,0,0,1-5,0A2.5,2.5,0,0,1,18,8.5Zm-.006,6.866a11.065,11.065,0,0,1-1.163,4.569A7.634,7.634,0,0,1,10,24H9V18.5A3.517,3.517,0,0,0,5.5,15H0V14A7.634,7.634,0,0,1,4.065,7.169,11.065,11.065,0,0,1,8.634,6.006,15.487,15.487,0,0,1,20.972,0h0A3.009,3.009,0,0,1,24,3,15.507,15.507,0,0,1,17.994,15.366ZM2.084,13H4.346A34.361,34.361,0,0,1,6.955,8.237a8.993,8.993,0,0,0-1.993.72A5.519,5.519,0,0,0,2.084,13Zm13.679,4.045A34.361,34.361,0,0,1,11,19.654v2.262a5.519,5.519,0,0,0,4.043-2.878A8.993,8.993,0,0,0,15.763,17.045ZM22,2.972A1,1,0,0,0,21,2c-5.16.147-8.65,2.124-12.018,6.822a29.92,29.92,0,0,0-2.471,4.271,5.5,5.5,0,0,1,4.4,4.4,29.92,29.92,0,0,0,4.271-2.471C19.876,11.65,21.853,8.16,22,2.972ZM6.122,17.879a3.015,3.015,0,0,1,0,4.242c-.907.906-3.622,1.465-4.748,1.664l-1.406.247.247-1.406c.2-1.126.758-3.841,1.664-4.748A3.073,3.073,0,0,1,6.122,17.879ZM5,20a.993.993,0,0,0-.293-.707,1,1,0,0,0-1.414,0A7.318,7.318,0,0,0,2.5,21.5a7.342,7.342,0,0,0,2.208-.794A.993.993,0,0,0,5,20Z" />
                </svg>
              </div>
              <div className="text-3xl  flex items-center justify-center relative font-medium">
                <div>
                  <span className="text-black... text-[1.4em] font-bold relative top-[9px]">P</span>
                  <span className="border-b-2">referl</span>
                </div>
              </div>
            </div>

            <div className="grow flex items-center">
              <div className="w-[15rem] flex bg-red-600... justify-around relative top-2 ml-4 text-[.85em]">
                <div>Ai</div>
                <div>Databases</div>
                <div className="flex">
                  <span>Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3 relative top-[6px] ml-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>

                <span className="relative top-[-2px] inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                  About
                </span>
              </div>
            </div>

            <div className=" flex items-center justify-center mr-16">
              <div>
                <button type="button" className="rounded bg-white/10 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20 mx-4">
                  Log in
                </button>

                <button
                  type="button"
                  className="border-[1.8px] rounded bg-indigo-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <div className="bg-yellow-300...">
            <h1 className="text-2xl pb-4 font-semibold ml-[15.5rem]">Candidate Database : Account Executives</h1>
          </div>

          <div className=" flex">
            <div className="bg-blue-300... w-[18rem]">
              <ul className="w-[11rem]">
                <li className="border-b-2 my-4">Candidate database</li>
                <li className="border-b-2  my-4">Roles to hire</li>
                <li className="border-b-2  my-4">Grading criteria</li>
                <li className="border-b-2  my-4">Assessment quesitons</li>
              </ul>
            </div>

            <div className=" grow flex flex-col text-xs">
              <div className="grow">
                <div className="grid grid-cols-7 border border-black p-6 bg-blue-600 rounded-lg">
                  <div className="px-4 py-2 text-gray-800 text-[1.1em] font-semibold font-bold border-b border-black">Name</div>
                  <div className="px-4 py-2 text-gray-800 text-[1.1em] font-semibold font-bold border-b border-black">Tenure</div>
                  <div className="px-4 py-2 text-gray-800 text-[1.1em] font-semibold font-bold border-b border-black">Company hired from</div>
                  <div className="px-4 py-2 text-gray-800 text-[1.1em] font-semibold font-bold border-b border-black">% of sales target hit</div>
                  <div className="px-4 py-2 text-gray-800 text-[1.1em] font-semibold font-bold border-b border-black">Time-to-hire(days)</div>
                  <div className="px-4 py-2 text-gray-800 text-[1.1em] font-semibold font-bold border-b border-black">Interview rating(%)</div>
                  <div className="px-4 py-2 text-gray-800 text-[1.1em] font-semibold font-bold border-b border-black">Time-to-productive(days)</div>

                  <div className="px-4 py-2 border border-black">Laura white</div>
                  <div className="px-4 py-2 border border-black">6</div>
                  <div className="px-4 py-2 border border-black">Salesforce</div>
                  <div className="px-4 py-2 border border-black">110</div>
                  <div className="px-4 py-2 border border-black">70</div>
                  <div className="px-4 py-2 border border-black">95</div>
                  <div className="px-4 py-2 border border-black">20</div>

                  <div className="px-4 py-2 border border-black">David whelan</div>
                  <div className="px-4 py-2 border border-black">6</div>
                  <div className="px-4 py-2 border border-black">Braze</div>
                  <div className="px-4 py-2 border border-black">105</div>
                  <div className="px-4 py-2 border border-black">75</div>
                  <div className="px-4 py-2 border border-black">92</div>
                  <div className="px-4 py-2 border border-black">25</div>

                  <div className="px-4 py-2 border border-black">fasdfasd</div>
                  <div className="px-4 py-2 border border-black">fasdfasd</div>
                  <div className="px-4 py-2 border border-black">fasdfasd</div>
                  <div className="px-4 py-2 border border-black">43</div>
                  <div className="px-4 py-2 border border-black">43</div>
                  <div className="px-4 py-2 border border-black">43</div>
                  <div className="px-4 py-2 border border-black">43</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">58</div>
                  <div className="px-4 py-2 border border-black">58</div>
                  <div className="px-4 py-2 border border-black">58</div>
                  <div className="px-4 py-2 border border-black">58</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">37</div>
                  <div className="px-4 py-2 border border-black">37</div>
                  <div className="px-4 py-2 border border-black">37</div>
                  <div className="px-4 py-2 border border-black">37</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black"> 44</div>
                  <div className="px-4 py-2 border border-black"> 54</div>
                  <div className="px-4 py-2 border border-black"> 64</div>
                  <div className="px-4 py-2 border border-black"> 74</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black"> 34</div>
                  <div className="px-4 py-2 border border-black"> 35</div>
                  <div className="px-4 py-2 border border-black"> 36</div>
                  <div className="px-4 py-2 border border-black"> 37</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">84</div>
                  <div className="px-4 py-2 border border-black">85</div>
                  <div className="px-4 py-2 border border-black">86</div>
                  <div className="px-4 py-2 border border-black">87</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">34</div>
                  <div className="px-4 py-2 border border-black">35</div>
                  <div className="px-4 py-2 border border-black">36</div>
                  <div className="px-4 py-2 border border-black">37</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">74</div>
                  <div className="px-4 py-2 border border-black">75</div>
                  <div className="px-4 py-2 border border-black">76</div>
                  <div className="px-4 py-2 border border-black">77</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">44</div>
                  <div className="px-4 py-2 border border-black">45</div>
                  <div className="px-4 py-2 border border-black">46</div>
                  <div className="px-4 py-2 border border-black">47</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black"> 4</div>
                  <div className="px-4 py-2 border border-black"> 5</div>
                  <div className="px-4 py-2 border border-black"> 6</div>
                  <div className="px-4 py-2 border border-black"> 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">24</div>
                  <div className="px-4 py-2 border border-black">25</div>
                  <div className="px-4 py-2 border border-black">26</div>
                  <div className="px-4 py-2 border border-black">27</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>

                  <div className="px-4 py-2 border border-black">Row 1, Col 1</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 2</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 3</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 4</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 5</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 6</div>
                  <div className="px-4 py-2 border border-black">Row 1, Col 7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchBox />
      <Socials />
    </main>
  );
}
