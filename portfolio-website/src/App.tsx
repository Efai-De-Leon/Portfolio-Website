import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./components/home/Home"
import { Contact } from "./components/contact/Contact"
import { useFetchCSVData } from './components/fetch_csv_data/useFetchCSVData'
import { CardProps } from './components/project_card/Card'

function App() {
  const { data, loading, error } = useFetchCSVData<CardProps>("github_portfolio.csv");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const contactData = {
    name: "Efai De Leon",
    email: "efaideleon@gmail.com",
    phone: "+1-(310)-773-2645"
  }

  const navLinks = [
    { path: "/Portfolio-Website/", title: "Home" },
    { path: "/contact/", title: "Contact" },
  ];

  return (
    <BrowserRouter>
      <Navbar title="Efai De Leon's Portfolio" navLinks={navLinks} />
      <Routes>
        <Route path="/Portfolio-Website/" element={<Home data={data} />} />
        <Route
          path="/contact/"
          element={
            <Contact
              name={contactData.name}
              email={contactData.email}
              phone={contactData.phone}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
