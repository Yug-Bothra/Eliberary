import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function AIGenerate() {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setGeneratedText("");
    setGenerated(true);

    try {
      const requestBody = {
        contents: [
          {
            parts: [
              { text: `Generate study notes for the following topic: "${inputText}"` }
            ]
          }
        ]
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        (data.error ? `⚠️ API Error: ${data.error.message}` : "");

      setGeneratedText(text || "⚠️ No content generated. Try again.");
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      setGeneratedText("⚠️ Error generating content. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Blue Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-gray-900">StudyAI</span>
              </div>
            </div>
           
          </div> 
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI Study Notes Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform any topic into comprehensive, well-structured study notes powered by AI
          </p>
        </div>

        <div
          className={`grid gap-8 transition-all duration-500 ${
            generated ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-2xl mx-auto"
          }`}
        >
          {/* Input Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Enter Your Topic</h2>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter the topic you want to study (e.g., Quantum Physics, World War II, Machine Learning...)"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900 bg-white placeholder-gray-500"
                  rows="6"
                  maxLength="500"
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {inputText.length}/500
                </div>
              </div>
              
              <button
                onClick={handleGenerate}
                disabled={loading || !inputText.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Generating Notes...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate Study Notes
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Panel */}
          {generated && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-h-[600px] flex flex-col">
              {loading ? (
                // Loading State
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Processing...</h3>
                      <p className="text-sm text-gray-600">AI is analyzing your topic and generating notes</p>
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="w-full bg-gray-100 rounded-full h-1 mb-6">
                    <div className="h-1 bg-blue-600 rounded-full animate-pulse w-3/4"></div>
                  </div>
                  
                  {/* Skeleton loader */}
                  <div className="space-y-3">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className={`h-3 bg-gray-200 rounded ${
                          i === 0 ? 'w-3/4' : 
                          i === 1 ? 'w-full' : 
                          i === 2 ? 'w-5/6' : 
                          i % 2 === 0 ? 'w-4/5' : 'w-2/3'
                        }`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : generatedText ? (
                <>
                  {/* Header */}
                  <div className="p-6 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Study Notes</h3>
                          <p className="text-sm text-gray-600">Generated and ready to use</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => navigator.clipboard.writeText(generatedText)}
                          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Copy to clipboard"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button 
                          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Save notes"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {generatedText}
                      </ReactMarkdown>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}

          {/* Empty state when no generation yet */}
          {!generated && (
            <div className="text-center py-12 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Generate</h3>
              <p className="text-gray-600">Enter a topic above and click generate to create your study notes</p>
            </div>
          )}
        </div>

        {/* Features section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Generate comprehensive notes in seconds, not hours</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Well Structured</h3>
            <p className="text-gray-600">Organized content with proper formatting and flow</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Any Topic</h3>
            <p className="text-gray-600">From science to history, covering all subjects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIGenerate;