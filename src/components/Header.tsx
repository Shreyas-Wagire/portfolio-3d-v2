import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
            <nav className="container mx-auto px-6 h-16 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Portfolio
                    </span>
                </h1>
                <div className="space-x-2">
                    <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors">
                        About
                    </Button>
                    <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors">
                        Contact
                    </Button>
                </div>
            </nav>
        </header>
    );
}