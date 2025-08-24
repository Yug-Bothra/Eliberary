import React from "react";

// Array of books with title, author, PDF path, and image path
const books = [
  {
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    pdf: "/pdfs/book1.pdf",
    img: "/images/book1.jpg",
  },
  {
    title: "Data Structures and Algorithms in C",
    author: "Adam Drozdek",
    pdf: "/pdfs/book2.pdf",
    img: "/images/book2.jpg",
  },
  {
    title: "Operating System Concepts",
    author: "Silberschatz, Galvin",
    pdf: "/pdfs/book3.pdf",
    img: "/images/book3.jpg",
  },
  {
    title: "Computer Networks",
    author: "Andrew S. Tanenbaum",
    pdf: "/pdfs/book4.pdf",
    img: "/images/book4.jpg",
  },
  {
    title: "Database System Concepts",
    author: "Silberschatz, Korth",
    pdf: "/pdfs/book5.pdf",
    img: "/images/book5.jpg",
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Russell & Norvig",
    pdf: "/pdfs/book6.pdf",
    img: "/images/book6.jpg",
  },
  {
    title: "Computer Organization and Architecture",
    author: "William Stallings",
    pdf: "/pdfs/book7.pdf",
    img: "/images/book7.jpg",
  },
  {
    title: "Electronic Devices and Circuits",
    author: "Boylestad",
    pdf: "/pdfs/book8.pdf",
    img: "/images/book8.jpg",
  },
  {
    title: "Shigley's Mechanical Engineering Design",
    author: "Richard G. Budynas & Keith Nisbett",
    pdf: "/pdfs/book9.pdf",
    img: "/images/book9.jpg",
  },
  {
    title: "Electronic Communication Systems",
    author: "George Kennedy",
    pdf: "/pdfs/book10.pdf",
    img: "/images/book10.jpg",
  },
  {
    title: "Principles of Electronic Communication Systems",
    author: "Louis E. Frenzel",
    pdf: "/pdfs/book11.pdf",
    img: "/images/book11.jpg",
  },
  {
    title: "Engineering Physics",
    author: "H.K. Malik & A.K. Singh",
    pdf: "/pdfs/book12.pdf",
    img: "/images/book12.jpg",
  },
];

const Books = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-80 h-80 bg-gradient-to-tr from-slate-100/40 to-blue-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-100/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 p-6 md:p-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            Digital Library
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our comprehensive collection of textbooks and academic resources. Download PDFs instantly for your studies.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50">
              <div className="text-2xl font-bold text-blue-700">{books.length}</div>
              <div className="text-sm text-gray-600">Total Books</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50">
              <div className="text-2xl font-bold text-indigo-700">100%</div>
              <div className="text-sm text-gray-600">Free Access</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50">
              <div className="text-2xl font-bold text-blue-700">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>

        {/* Enhanced Books Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 flex flex-col border border-white/50 relative"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Book Cover Section */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="w-full h-72 sm:h-80 md:h-72 lg:h-80 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                    <img
                      src={book.img}
                      alt={book.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="flex flex-col items-center justify-center h-full text-gray-400">
                            <svg class="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                            <span class="text-sm font-medium">Book Cover</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    PDF
                  </div>
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow relative z-10">
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                      {book.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 font-medium">
                      by {book.author}
                    </p>
                  </div>

                  {/* Action Section */}
                  <div className="mt-auto space-y-3">
                    {/* Main Download Button */}
                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center group/btn"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </div>
                    </a>

                    {/* Secondary Actions */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="flex-1 px-4 py-2 bg-white border-2 border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-sm font-medium">
                        <div className="flex items-center justify-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Preview
                        </div>
                      </button>
                      <button className="flex-1 px-4 py-2 bg-white border-2 border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-sm font-medium">
                        <div className="flex items-center justify-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          Save
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16 p-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-800">Need Help?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Can't find the book you're looking for? Contact us and we'll help you find the right resources for your studies.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Books;