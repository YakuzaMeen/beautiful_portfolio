import { Home } from "lucide-react"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound   />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
