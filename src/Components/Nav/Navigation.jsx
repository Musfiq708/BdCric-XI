import logo from '../../assets/logo.png';
import { TbCoinTakaFilled } from 'react-icons/tb';

export default function Navigation() {
  return (
    <div className='flex items-center justify-between w-10/12 mx-auto pt-[50px] pb-6'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className='flex gap-12 items-center'>
        <a className='nav-options' href="">Home</a>
        <a className='nav-options' href="">Fixture</a>
        <a className='nav-options' href="">Teams</a>
        <a className='nav-options' href="">Schedules</a>
        <div className='flex items-center border border-[#1313131A] rounded-xl py-4 px-5 gap-[10px] hover:border-red-600'>
          <p className='text-base font-semibold '>0 Coin</p>
          <TbCoinTakaFilled className='text-[35px] text-orange-400 font- border-amber-600' />
        </div>
      </div>
    </div>
  )
}
