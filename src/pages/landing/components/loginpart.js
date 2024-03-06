
import logo from "./companylogo.svg"
import hexagon from "./Hexagon.png"


export default function loginpart(){

return(

    <div className="bg-black text-white ">
    <div class="px-12 ">
        <img src={logo} alt="rnp" class="max-w-150  max-h-100 w-48 pb-5 pt-8 h-auto" />
    </div>

    <div class=" absolute pl-8 right-40 transform translate-x-1/2 ">
        <img src={hexagon} alt="" class="w-72 h-96" />
    </div>

    <div class="text-start ml-12 my-16 ">
        <h1 class="text-6xl font-bold mb-4">Building Tomorrow’s </h1>
        <h1 class="text-6xl font-bold mb-4">Solutions, Today </h1>

        <p class="text-2xl mb-8 mt-8">Discover the limitless possibilities of the digital age with RnPsoft.</p>
        <button class=" bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 px-12 py-2 text-lg mt-12   font-semibold rounded-lg">LOGIN</button>
    </div>
  </div>
);
}