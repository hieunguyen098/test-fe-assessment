export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessments</h1>

          <p className="text-gray-600 mb-6">
            Click on the links below to view the assessments
          </p>

          <ul className="space-y-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((taskNum) => (
              <li key={taskNum}>
                <a
                  href={`/task-${taskNum}`}
                  className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200 ease-in-out"
                >
                  <span className="flex items-center">
                    <span className="text-lg font-medium">Task {taskNum}</span>
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
