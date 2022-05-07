function Navbar() {
  return (
    <div>
      <nav className='h-40 relative flex flex-nowrap items-center justify-between py-3 bg-red-900   px-1 phone:px-8 '>
        <img className='w-48 pb-3' src="https://www.summitsjbs.org/wp-content/uploads/sites/2318/2021/02/SBS-50-v2-e1612318587978.png" alt="SJBS Logo" />
        <h1 className='text-yellow-500 invisible mobile:visible text-smallest mobile:text-5xl' >Field Status</h1>
        <a href="https://www.summitsjbs.org/" className=' bg-transparent hover:bg-yellow-700 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-700 hover:border-transparent rounded'>
          Return Home
        </a>
      </nav>
    </div>
  );
}

export default Navbar;