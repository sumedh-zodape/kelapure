
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Features from '../Components/Features'
import Description from '../Components/Description'
import Footer from '../Components/Footer'
import Payment from '../Components/Payment'
import SmallInfo from '../Components/SmallInfo'
// import Section from '../Pages/Section'




const Home = () => {
  return (
    <>
    <div  className='bg-[#f5f5f5]'>

    <Header />
      <Banner />
      <Features />
      <Description />
      {/* <Section /> */}
      <SmallInfo />
      <Payment />
      <Footer />
    </div>
    


    </>
  )
}

export default Home
