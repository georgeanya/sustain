import type { NextPage } from 'next'
import ErrorPage from '../components/404'
import Download from '../components/download'


const Home: NextPage = () => {
  return (
    <div>
      {/* <Download/> */}
      <ErrorPage/>
    </div>
  )
}

export default Home
