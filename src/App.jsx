import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBarPage from './layout/NavBarPage'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import Footer from './layout/Footer'
import AllStories from './pages/AllStories'
import HomeTwo from './pages/HomeTwo'
import CreateStory from './pages/CreateStory'
import EditStory from './pages/EditStory'
import  { Toaster } from 'react-hot-toast';
import MapHero from './component/MapHero'
import SingleStory from './pages/SingleStory'
import Single from './component/Single'


function App() {

  return (
    <>
 <BrowserRouter>
 
<Routes >
  <Route element={<> <NavBarPage/> <Footer/>
   </>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/HomeTwo' element={<HomeTwo/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/AllStories' element={<AllStories/>}/>
    <Route path='/CreateStory' element={<CreateStory/>}/>
    <Route path='/EditStory' element={<EditStory/>}/>
    <Route path='/MapHero/:userId' element={<MapHero/>}/>
    <Route path='/Single/:postId' element={< Single/>}/>
    <Route path='/SingleStory' element={<SingleStory/>}/>

 

</Route>
<Route path='/SignIn'  element={<SignIn/>}/>
<Route path='/SignUp'  element={<SignUp/>}/>
</Routes>
</BrowserRouter>
<Toaster />

    
    </>
  )
}

export default App
