
import { MagnifyingGlass } from 'react-loader-spinner' 
export default function Louder() {
  return (
      <div className='loader'>
          <MagnifyingGlass 
              visible={true}
              height="200"
              width="200"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
          />
    </div>
  )
}
