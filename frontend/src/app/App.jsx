import { Routes, Route } from 'react-router-dom';
import HomePage from "../app/home/page.jsx"
import HistoryPage from "../app/history/page.jsx"
import UploadPage from "../app/upload/page.jsx"
import AnalysisPage from "../app/analysis/page.jsx"
import Footer from "../components/footer.jsx"
import Navbar from "../components/navbar"
import { MedInfoProvider } from "../context/MedInfoContext.jsx"
import { HistoryProvider } from '../context/HistoryContext.jsx';
import { InteractProvider } from '../context/InteractContext.jsx';
import { CheckInteractProvider } from '../context/CheckInteractContext.jsx';
function App() {
  return (
    <>
      <MedInfoProvider>
        <HistoryProvider>
          <CheckInteractProvider>
            <InteractProvider>
              <div className="flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/upload" element={<UploadPage />} />
                    <Route path="/analysis" element={<AnalysisPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </InteractProvider>
          </CheckInteractProvider>
        </HistoryProvider>
      </MedInfoProvider>

    </>
  )
}

export default App
