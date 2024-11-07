const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://github.com/AntGom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/antonio-g%C3%B3mez-dom%C3%ADnguez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/AntonioGmezDgu1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Twitter
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Saltador. Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;