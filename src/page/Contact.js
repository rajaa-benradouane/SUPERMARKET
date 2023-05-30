import React from 'react';
import Footer from '../component/Footer';
const Contact = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Contactez-nous</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Nom :
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email :
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Entrez votre email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message :
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              id="message"
              placeholder="Entrez votre message"
              rows={6}
            ></textarea>
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
      <br/>
      <br/>
      <br/>
      <Footer>

      </Footer>
    </section>
  );
};

export default Contact;
