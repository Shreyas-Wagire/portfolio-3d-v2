export default function Footer() {
    return (
      <footer className="bg-black/80 backdrop-blur-lg border-t border-white/10 py-4">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  }