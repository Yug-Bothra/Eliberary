import React, { useState, useEffect } from "react";

const Recommender = () => {
  const [books, setBooks] = useState([]);
  const [department, setDepartment] = useState("CSE");
  const [semester, setSemester] = useState("1");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch("/data/books_recommender_real.csv")
      .then((res) => res.text())
      .then((csvText) => {
        const rows = csvText.trim().split("\n");
        const headers = rows[0].split(",");
        const data = rows.slice(1).map((row) => {
          const values = row.split(",");
          const obj = {};
          headers.forEach((header, i) => {
            obj[header.trim()] = values[i]?.trim();
          });
          return obj;
        });
        setBooks(data);
      });
  }, []);

  useEffect(() => {
    const filtered = books.filter(
      (b) =>
        (b.department === department || b.department === "All") &&
        b.semester === semester
    );
    setFilteredBooks(filtered);
  }, [books, department, semester]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-slate-100/40 to-blue-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-6 md:p-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl mb-8 shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-4 leading-tight">
            Book Recommender
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect books for your academic journey. Select your department and semester to get personalized recommendations tailored to your studies.
          </p>
        </div>

        {/* Enhanced Filter Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Filter Your Search</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex-1 max-w-xs">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Department</label>
              <div className="relative">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-blue-200 bg-white/90 text-blue-900 font-medium shadow-lg hover:shadow-xl hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="CSE">Computer Science & Engineering</option>
                  <option value="EC">Electronics & Communication</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="Textile">Textile Engineering</option>
                  <option value="Civil">Civil Engineering</option>
                  <option value="All">All Departments</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-xs">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Semester</label>
              <div className="relative">
                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-blue-200 bg-white/90 text-blue-900 font-medium shadow-lg hover:shadow-xl hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300 appearance-none cursor-pointer"
                >
                  {[...Array(8)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      Semester {i + 1}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Results counter */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-800">
                {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Books Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No Books Found</h3>
              <p className="text-gray-500">Try adjusting your department or semester selection to find more books.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredBooks.map((book, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 p-6 flex flex-col justify-between border border-white/50 relative overflow-hidden"
                >
                  {/* Card gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Book icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-800 transition-colors duration-300">
                        {book.title}
                      </h2>
                      <p className="text-gray-600 font-medium text-sm mb-3">
                        by {book.author}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {book.department}
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                        Sem {book.semester}
                      </span>
                    </div>

                    {/* Action button */}
                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg">
                      View Details
                    </button>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer section */}
        {filteredBooks.length > 0 && (
          <div className="text-center mt-12 p-6">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">
                Showing {filteredBooks.length} recommended books for {department} - Semester {semester}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommender;