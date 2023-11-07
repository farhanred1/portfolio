import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-[#0a0416] text-white">
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div className="container mx-auto py-5 px-4">
        <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://flowbite.com/" className="hover:text-white">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="md:text-center lg:text-right mt-4 sm:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://github.com/soumyajit4419"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Soumyajit4419"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
