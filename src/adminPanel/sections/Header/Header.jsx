import Logo from '../../../components/Logo'
import { CiSearch, CiUser } from 'react-icons/ci'
import logoImg from '../../../assets/bazarify logo white.png'

function Header() {
  return (
    <header className="w-full py-5 flex bg-black">
      <div
        className="
          w-[90%] max-w-[1200px] flex items-center justify-between gap-5 mx-auto
        "
      >
        <div
          className="
            w-[20%] max-w-[200px]
            sm:w-[100px]
            md:w-[150px]
          "
        >
          <Logo logoFile={logoImg}/>
        </div>

        <div id='searchBar'
          className="
            w-[100px] h-[50px] flex justify-between
            sm:w-[180px]
            md:w-[350px]
          "
        >
          <input id='searchInput'
            type="text"
            placeholder="Search User"
            className="
              w-[85%] bg-brand-adminDark text-white rounded-l-md border-none outline-none px-2 py-[7px]
            "
          />
          <CiSearch
            className="
              w-[15%] h-full bg-brand-adminDark text-white p-2.5 rounded-r-md
            "
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <CiUser
            className="
              w-[40px] h-[40px] rounded-[25px] bg-brand-adminDark p-[10px] text-white text-[1rem]
              sm:w-[35px] sm:h-[35px] sm:p-[7px]
              md:w-[40px] md:h-[40px] md:p-[7px]
            "
          />
          <p
            className="
              text-white text-[1rem]
              sm:text-[0.7rem]
              md:text-[0.8rem]
            "
          >
            {localStorage.getItem('firstName').charAt(0).toUpperCase() + localStorage.getItem('firstName').slice(1)}
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
