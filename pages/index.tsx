import type { NextPage } from 'next'
import ErrorPage from './404'
import Download from './download'
import HomePage from './home'


const Home: NextPage = () => {
  return (
    <div className=''>
      {/* <Download/> */}
      {/* <ErrorPage/> */}
      <HomePage/>
    </div>
  )
}

export default Home
