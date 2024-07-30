import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, HomeIcon, ImagePlus, Compass } from "lucide-react";

import Profile from "../../assets/profile.jpg";


const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 h-screen bg-gray-200 p-4 border-5 border-black-800">
      <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-300 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
     <HomeIcon />
     <p className="text-l font-semibold">Home</p>
   </div>
   <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-300 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
<Compass/>  
   <p className="text-l font-semibold">Explore</p>
   </div>
   <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-300 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
     <Heart />
     <p className="text-l font-semibold">Notification</p>
   </div>
   <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-300 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
     <ImagePlus />
     <p className="text-l font-semibold">Create</p>
   </div>
   <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-300 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
     <Avatar>
       <AvatarImage src={Profile} alt="@shadcn" />
       <AvatarFallback>CN</AvatarFallback>
     </Avatar>
     <p className="text-l font-semibold">Profile</p>
   </div>
      </div>
      {/* Main Content */}
      <div className="w-3/5 bg-gray-100 p-4">
        {children}
      </div>
      {/* Right Sidebar */}
     
      <div className="w-1/5 h-screen bg-gray-200 p-4">
      <div className="flex items-start gap-4 mb-6 w-full cursor-pointer">
     <Avatar className="relative w-12 h-12 rounded-full overflow-hidden">
       <AvatarImage
         src={Profile}
         alt="@shadcn"
         className="object-cover w-full h-full"
       />
       <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
         CN
       </AvatarFallback>
     </Avatar>
     <div>
       <p className="text-sm">sayem</p>
       <p className="text-base font-semibold">Sayem Kalim</p>
     </div>
   </div>
   <div className="flex items-center justify-between w-full">
     <p className="text-gray-500  font-semibold">Suggested Friends</p>
     <p className="text-gray-900 cursor-pointer hover:underline">
       See all
     </p>
   </div>
   <div className="mt-6 w-full">
   <div className="flex items-center justify-between w-full mb-4">
     <div className="flex items-center gap-3">
     <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
       <AvatarImage
         src="https://github.com/shadcn.png"
         alt="@shadcn"
         className="object-cover w-full h-full"
       />
       <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
         CN
       </AvatarFallback>
     </Avatar>
     <p className="text-sm font-semibold">sayemkalim</p>
     </div>
     <p className="text-sm text-blue-500 cursor-pointer hover:underline">
       Follow
     </p>
   </div>
   </div>
   <div className="mt-6 w-full">
   <div className="flex items-center justify-between w-full mb-4">
     <div className="flex items-center gap-3">
     <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
       <AvatarImage
         src="https://github.com/shadcn.png"
         alt="@shadcn"
         className="object-cover w-full h-full"
       />
       <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
         CN
       </AvatarFallback>
     </Avatar>
     <p className="text-sm font-semibold">sayemkalim</p>
     </div>
     <p className="text-sm text-blue-500 cursor-pointer hover:underline">
       Follow
     </p>
   </div>
   </div>
   <div className="mt-6 w-full">
   <div className="flex items-center justify-between w-full mb-4">
     <div className="flex items-center gap-3">
     <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
       <AvatarImage
         src="https://github.com/shadcn.png"
         alt="@shadcn"
         className="object-cover w-full h-full"
       />
       <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
         CN
       </AvatarFallback>
     </Avatar>
     <p className="text-sm font-semibold">sayemkalim</p>
     </div>
     <p className="text-sm text-blue-500 cursor-pointer hover:underline">
       Follow
     </p>
   </div>
   </div>
      </div>
    </div>
  );
};

export default Layout;
