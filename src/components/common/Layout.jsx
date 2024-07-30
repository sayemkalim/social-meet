import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, HomeIcon, Compass, PlusSquare } from "lucide-react";
import { Dropdown } from './Dropdown';
import Profile from "../../assets/profile.jpg";

const Layout = ({ children }) => {
  return (
    <>
      <div className="hidden lg:block w-1/5 bg-gray-100 p-4 border-r border-gray-300" style={{padding:"50px"}}>
        <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-200 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
          <HomeIcon />
          <p className="text-l font-semibold">Home</p>
        </div>
        <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-200 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
          <Compass />
          <p className="text-l font-semibold">Explore</p>
        </div>
        <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-200 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
          <Heart />
          <p className="text-l font-semibold">Notification</p>
        </div>
        <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-200 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
          <PlusSquare />
          <p className="text-l font-semibold">Create</p>
        </div>
        <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-gray-200 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
          <Avatar>
            <AvatarImage src={Profile} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-l font-semibold">Profile</p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center w-full gap-4 mb-6 cursor-pointer hover:bg-gray-300 py-2 px-3 hover:text-black rounded-lg transition-all duration-200">
            <Dropdown />
            <h1 className="text-xl font-semibold">More</h1>
          </div>
        </div>
      </div>
      
      <nav className="flex items-center justify-around bg-white p-4 border-t border-gray-300 lg:hidden fixed bottom-0 w-full">
        <HomeIcon className="h-6 w-6 cursor-pointer" />
        <Compass className="h-6 w-6 cursor-pointer" />
        <PlusSquare className="h-6 w-6 cursor-pointer" />
        <Heart className="h-6 w-6 cursor-pointer" />
        <Avatar className="h-6 w-6 cursor-pointer">
          <AvatarImage src={Profile} alt="Profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </>
  );
};

export default Layout;
