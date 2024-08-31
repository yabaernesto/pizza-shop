import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuContent } from "./ui/dropdown-menu";

import { Building, ChevronDown, LogOut } from "lucide-react";
import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "./ui/dropdown-menu";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="flex select-none items-center gap-2"
        >
          Pizza shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Yaba Ernesto</span>
          <span className="text-xs font-normal text-muted-foreground">
            yabaernesto@gmail.com
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building className="h-4 w-4 mr-2" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="h-4 w-4 mr-2" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
