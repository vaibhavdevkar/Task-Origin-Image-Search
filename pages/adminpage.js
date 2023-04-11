import Link from 'next/link';

function Adminpage() {
  return (
    <>
    <div className='adminpage'>
    <Link style={{textDecoration: 'none'}} href="/cards">
    <h1>Clicked here to Main Dashboard page</h1>
    </Link>
      </div>
      <div className='adminpage'>
      <Link style={{textDecoration: 'none'}} href="/editadmin">
    <h1>Clicked here to admin Dashboard page</h1>
    </Link>
      </div>
    </>
  )
}

export default Adminpage;







