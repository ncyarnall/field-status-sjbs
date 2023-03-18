function Navbar() {
  return (
    <div>
      <nav className='h-40 relative flex flex-nowrap items-center justify-between py-3 bg-red-900   px-1 phone:px-8 '>
        <img className='mr-3 h-100p' src="https://www.summitssbl.org/wp-content/uploads/sites/2318/2022/08/Summit-SB-Logo-3-e1660592918493.png" alt="SSBL Logo" />
        <h1 className='text-yellow-500 invisible mobile:visible text-smallest mobile:text-5xl' >Field Status</h1>
        <a href="https://www.summitssbl.org/" className=' bg-transparent hover:bg-yellow-700 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-700 hover:border-transparent rounded'>
          Return Home
        </a>
      </nav>
    </div>
  );
}

export default Navbar;