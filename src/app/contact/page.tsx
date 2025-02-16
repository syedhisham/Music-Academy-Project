import { Meteors } from "@/components/ui/meteors";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="max-w-lg w-full p-8 border border-gray-300 rounded-xl shadow-sm">
        <h2 className="text-3xl font-semibold dark:text-white text-center">
          Contact Us
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Have questions? Feel free to reach out!
        </p>

        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-400 font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message..."
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>
          <Meteors number={20} />
        </form>
      </div>
    </div>
  );
};

export default Page;
