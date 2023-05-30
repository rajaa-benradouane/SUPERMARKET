import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">About Us
</h3>
            <p className="text-sm text-black">A supermarket is a self-service shop offering a wide variety of food</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Useful links</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-sm hover:text-gray-400 transition-colors duration-300 text-black" href="#!">
                  Home
                </a>
              </li>
              <li>
                <a className="text-sm hover:text-gray-400 transition-colors duration-300 text-black" href="#!">
                  Menu
                </a>
              </li>
              <li>
                <a className="text-sm hover:text-gray-400 transition-colors duration-300 text-black" href="#!">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">
contact us</h3>
            <p className="text-sm text-black">277,Madinet el wahda,LAAYOUNE</p>
            <p className="text-sm text-black">rajaabenradouane@GMAIL.com</p>
            <p className="text-sm text-black">+212 644 398 348</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
