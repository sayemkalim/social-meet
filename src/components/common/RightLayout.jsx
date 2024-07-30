import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Profile from "../../assets/profile.jpg";

const RightLayout = () => {
  return (
<div className="hidden lg:block w-1/5 h-screen bg-white-100 p-4" style={{padding:"50px"}} >
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
      </div>  )
}

export default RightLayout
