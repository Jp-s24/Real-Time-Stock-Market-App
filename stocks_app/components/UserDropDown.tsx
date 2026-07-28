'use client'

import { Button } from "@/components/ui/button"
import { Bookmark, LayoutDashboard, LogOut, Search } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import NavItems from "@/components/NavItems"

const UserDropDown = () => {
    const router = useRouter()

    const handleSignOut = async () => {
        router.push("/sign-in")
    }

    const user = {
        name: "John",
        email: "contact@jsmastery.com",
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="
                        flex
                        items-center
                        gap-3
                        text-gray-400
                        hover:text-yellow-500
                    "
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>

                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-64 bg-black border-gray-700"
            >
                <DropdownMenuLabel>
                    <div className="flex items-center gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col">
                <span className="text-base font-medium text-gray-200">
                    {user.name}
                </span>

                            <span className="text-sm text-gray-500">
                    {user.email}
                </span>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-700" />

                {/* Logout FIRST */}
                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="
            cursor-pointer
            text-gray-200
            focus:bg-transparent
            focus:text-yellow-500
        "
                >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-gray-700" />

                {/* Dashboard SECOND */}
                <DropdownMenuItem
                    onClick={() => router.push("/dashboard")}
                    className="
            cursor-pointer
            text-gray-200
            focus:bg-transparent
            focus:text-yellow-500
        "
                >
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                </DropdownMenuItem>

                {/* Search THIRD */}
                <DropdownMenuItem
                    onClick={() => router.push("/search")}
                    className="
            cursor-pointer
            text-gray-200
            focus:bg-transparent
            focus:text-yellow-500
        "
                >
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </DropdownMenuItem>

                {/* Watchlist FOURTH */}
                <DropdownMenuItem
                    onClick={() => router.push("/watchlist")}
                    className="
            cursor-pointer
            text-gray-200
            focus:bg-transparent
            focus:text-yellow-500
        "
                >
                    <Bookmark className="h-4 w-4 mr-2" />
                    Watchlist
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropDown