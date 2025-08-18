import HomePage from "../app/home/page.jsx"
import HistoryPage from "../app/history/page.jsx"
import UploadPage from "../app/upload/page.jsx"
import AnalysisPage from "../app/analysis/page.jsx"
import Footer from "../components/footer.jsx"
import Navbar from "../components/navbar"
function App() {
  let Component;
  switch(window.location.pathname){
    case "/" :
      Component = <HomePage/>
      break;
    case "/upload" :
      Component = <UploadPage/>
      break;
    case "/analysis" :
      Component = <AnalysisPage/>
      break;
    case "/history" :
      Component = <HistoryPage/>
      break;
  }
  return (
    <>
      <div className="flex flex-col">
      <Navbar/>
      <div className="">
        {Component}
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
