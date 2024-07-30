import {
    Github,
    LifeBuoy,
    LogOut,
    MenuIcon,
    Settings,
    User,
   } from "lucide-react"
   
   import { Button } from "../ui/button"
   import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
   } from "../ui/dropdown-menu"
   
   export function Dropdown() {
    const logout = () => {
        localStorage.removeItem('authToken'); 
        window.location.href = '/'; 
      };   
       return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="none"><MenuIcon /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span onClick={logout}>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
   }