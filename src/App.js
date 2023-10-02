import routes from "./routes"
import { useRoutes } from "react-router-dom"
import TopBar from "./components/topBar/TopBar"
export default function App() {
  let routers =  useRoutes(routes)
  return (
    <div className="App">
    <TopBar />
      {routers}
    </div>
  )
}
