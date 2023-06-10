const Footer = () => {
    return (
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-12c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h12c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM18 18h-12v-12h12v12zM16.5 7h-9.5v-2h9.5v2zM18 13.5c0 0.276-0.224 0.5-0.5 0.5h-2.5v-3.5h2.5c0.276 0 0.5 0.224 0.5 0.5v2.5zM18 11h-2v-1h2v1z" />
              </svg>
            </a>
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.206 0-4 1.794-4 4v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4v-14c0-2.206-1.794-4-4-4zM22 18c0 1.104-0.896 2-2 2h-14c-1.104 0-2-0.896-2-2v-14c0-1.104 0.896-2 2-2h14c1.104 0 2 0.896 2 2v14zM7 18h-2v-6h2v6zM5 5h-2v12h2v-12zM9 18h-2v-6h2v6zM11 18h-2v-6h2v6zM13 18h-2v-6h2v6zM15 18h-2v-6h2v6z" />
              </svg>
            </a>
            <a href="#!" className="text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 24v-24l18 12-18 12z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="text-sm">
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Security
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="text-sm">
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Partners
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="text-sm">
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <form className="mt-4">
              <input
                type="email"
                className="w-full bg-neutral-100 py-2 px-4 rounded-md text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="py-4 bg-neutral-200 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
          <div className="container mx-auto text-center">
            <p>© 2023 Danel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;