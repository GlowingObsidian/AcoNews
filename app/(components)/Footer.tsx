function Footer() {
  return (
    <footer className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-4 px-6 mt-8">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        <p className="text-sm">&copy; 2024 AcoNews. All rights reserved.</p>
        <p className="text-sm flex items-center">
          Made with ❤️ by Shreyan Dey for Acowale
        </p>
      </div>
    </footer>
  );
}

export default Footer;
