import { Search, Bell, User, Menu, MapPin } from "lucide-react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Badge } from "@/ui/badge";
import { Dialog, DialogTrigger, DialogContent } from "@/ui/dialog";
import { AuthDialog } from "@/Auth/Auth"; // 👈 the flip UI

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Locafy
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  friendly • trustable service
                </span>
              </div>
            </div>
          </div>

          {/* Middle - Search */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-2xl mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for services..."
                className="pl-10 bg-white/20 border-white/30 backdrop-blur-sm text-gray-700 placeholder-gray-500 focus:border-emerald-300 focus:ring-emerald-200"
              />
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-emerald-600" />
              <span>New York</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative hover:bg-emerald-50/50" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-emerald-500 text-white text-xs">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="relative hover:bg-emerald-50/50" aria-label="User menu">
              <User className="h-5 w-5" />
            </Button>

            {/* Auth Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                  Sign Up
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 bg-transparent border-none shadow-none">
                {/* start on signup */}
                <AuthDialog startOn="signup" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
