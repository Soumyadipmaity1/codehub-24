import logo from './companylogo.svg'



export default function footer(){

return(

<footer class="w-full bg-[#020319] md:px-4 pt-10 flex font-medium flex-row flex-wrap justify-between">
  <div class="w-96 px-10">
    <div class="flex flex-wrap ">
<img class="w-44 pb-5" src={logo} alt="" />
    </div>
    <p class="text-gray-200 mb-7"> A pioneering tech company driven by innovation, excellence, and a passion for creating
      cutting-edge solutions</p>
      <p class="text-gray-200">team@rnpsoft.com</p>


  </div>

  <div>
    <h2 class="font-semibold pt-3 text-neutral-300 text-xl md:ps-0  ">About Us</h2>
    <div class="mt-2 w-20 md:ms-0 ms-28 h-1 rounded-full border-b-2  "></div>
    <div class="text-gray-300 ps-32 md:ps-0">
      <p class="pt-4 cursor-pointer hover:text-white "><a target="_blank" rel="noopener noreferrer"
          href="#">Home</a></p>
      <p class="cursor-pointer hover:text-white  "><a target="_blank" rel="noopener noreferrer"
          href="#">Our Team </a></p>
      <p class="cursor-pointer hover:text-white  "><a target="_blank" rel="noopener noreferrer"
          href="#">Our Services</a></p>
      <p class="cursor-pointer hover:text-white  "><a target="_blank" rel="noopener noreferrer"
          href="#">Careers</a></p>
    </div>
  </div>

  <div class="pr-10 w-96 ">
    <h2 class="font-semibold md:ps-16  ps-28  pt-3 text-neutral-300 text-xl ">Follow Us</h2>
    <div class="mt-2 w-20 md:ms-16 ms-28  h-1 rounded-full border-b-2  "></div>
<div class="flex text-white text-3xl">
<p class="p-4"><i class="fa-brands fa-youtube"></i></p>
<p class="p-4"><i class="fa-brands fa-instagram"></i></p>
<p class="p-4"><i class="fa-brands fa-linkedin"></i></p>
<p class="p-4"><i class="fa-brands fa-x-twitter"></i></p>

  </div>
</div>
<div class=" w-full  mx-auto p-4 ">
      <hr class="m border-gray-200 py-2 dark:border-gray-700" />

      <span class="text-sm text-gray-500 flex justify-center text-center dark:text-gray-400">© 2024 <a
          href="#" class="hover:underline"> RnPsoft™</a>. All Rights Reserved.
      </span>
  </div>


</footer>

);



}