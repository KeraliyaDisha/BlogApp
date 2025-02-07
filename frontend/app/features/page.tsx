
const FeaturesPage = () => {
  return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Features of Our Product
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-xl rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">

                <h2 className="text-2xl font-semibold text-gray-800">Feature One</h2>
              </div>
              <p className="text-gray-600">
                This feature helps users manage tasks efficiently, saving time and effort. It’s intuitive and easy to use.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-xl rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
  
                <h2 className="text-2xl font-semibold text-gray-800">Feature Two</h2>
              </div>
              <p className="text-gray-600">
                Optimize your workflow with this feature. It offers an innovative way to automate processes, reducing manual effort.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-xl rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Feature Three</h2>
              </div>
              <p className="text-gray-600">
                Feature Three is designed to integrate seamlessly with other tools. It enhances productivity by connecting various services.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow-xl rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Feature Four</h2>
              </div>
              <p className="text-gray-600">
                This is a unique feature that allows you to gain deeper insights into your data, helping you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FeaturesPage;
