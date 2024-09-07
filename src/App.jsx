import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './router/Router'

function App() {
  return (
    <div className='h-screen bg-gray-200 flex flex-col justify-between'>
      <Header />
      <div className=' flex justify-center'>
        <Router/>
      </div>
      <Footer />
    </div>
  )
}

export default App
