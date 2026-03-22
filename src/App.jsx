import { useState } from "react";

function App() {
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const uploaded = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...uploaded]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* HEADER */}
      <header className="bg-white shadow-sm px-4 py-3 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-lg font-bold text-blue-600">
          Blessing 💙
        </h1>
        <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg">
          + Add
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 space-y-6">

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-1">
            Study Smarter ✨
          </h2>
          <p className="text-xs opacity-90">
            Upload files, take notes, and learn faster
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-xl shadow border">
            <p className="text-xs text-gray-500">Files</p>
            <h3 className="text-lg font-bold">{files.length}</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow border">
            <p className="text-xs text-gray-500">Notes</p>
            <h3 className="text-lg font-bold">
              {notes.length > 0 ? 1 : 0}
            </h3>
          </div>
        </div>

        {/* FILE UPLOAD */}
        <div className="bg-white p-4 rounded-2xl shadow border">
          <h3 className="text-sm font-semibold mb-3">
            Upload Files 📄
          </h3>

          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="mb-3 text-sm"
          />

          <div className="space-y-2 max-h-32 overflow-y-auto">
            {files.map((file, index) => (
              <div
                key={index}
                className="text-xs bg-gray-50 p-2 rounded border"
              >
                📄 {file.name}
              </div>
            ))}
          </div>
        </div>

        {/* NOTES */}
        <div className="bg-white p-4 rounded-2xl shadow border">
          <h3 className="text-sm font-semibold mb-3">
            Quick Notes ✍️
          </h3>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write something..."
            className="w-full h-28 p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm"
            onClick={() => alert("Saved")}
          >
            Save Notes
          </button>
        </div>

      </main>

      {/* BOTTOM NAV (VERY IMPORTANT FOR MOBILE) */}
      <nav className="bg-white border-t flex justify-around py-2">
        <button className="flex flex-col items-center text-xs text-blue-600">
          🏠
          Home
        </button>

        <button className="flex flex-col items-center text-xs text-gray-500">
          📄
          Files
        </button>

        <button className="flex flex-col items-center text-xs text-gray-500">
          ✍️
          Notes
        </button>

        <button className="flex flex-col items-center text-xs text-gray-500">
          🤖
          AI
        </button>
      </nav>

    </div>
  );
}

export default App;