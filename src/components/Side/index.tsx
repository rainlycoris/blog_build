import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import './index.css'
import ShootingStar from '@components/ShootingStar'
import Poetry from '@components/Poetry'
import {
  Home,
  Inbox,
  Book,
  Message,
  Moon,
  Heart,
  User,
  Github,
  Twitter,
  Telegram,
  Mail,
  Music,
  Butterfly,
} from '@components/Icons'
import config from '@/config'

const { github, twitter, telegram, email, music, blog } = config.contact

type SideProps = {}

const Side: React.FC<SideProps> = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className="side fixed top-0 left-0 h-full overflow-hidden hidden lg:flex flex-col justify-between">
      <ShootingStar />

      {/* side menu */}
      <div className="pb-20 w-full h-2/3 flex justify-end z-10">
        <nav className="nav nav-y flex flex-col justify-end items-center w-12">
          <Link className={clsx(pathname === '/' && 'active')} to="/" data-name="首页">
            <Home />
          </Link>
          <Link className={clsx(pathname === '/inspiration' && 'active')} to="/inspiration" data-name="灵感">
            <Message />
          </Link>
          <Link className={clsx(pathname === '/project' && 'active')} to="/project" data-name="项目">
            <Inbox />
          </Link>
          <Link className={clsx(pathname === '/book' && 'active')} to="/book" data-name="书单">
            <Book />
          </Link>
          <Link className={clsx(pathname === '/friend' && 'active')} to="/friend" data-name="友邻">
            <Heart />
          </Link>
          <Link className={clsx(pathname === '/about' && 'active')} to="/about" data-name="自述">
            <User />
          </Link>
        </nav>
        <div className="head flex flex-col justify-end pl-3 pb-3 w-2/3">
          <h3 className="title text-6xl tracking-wider">夜雨</h3>
          <span className="subtitle pt-2 pb-8 pl-1 text-xl tracking-wider">空白的我 将命运紧握</span>
          <Poetry />
        </div>
      </div>

      {/* footer menu */}
      <div className="flex justify-end py-12">
        <div className="mode" data-name="堕天">
          <Butterfly />
        </div>
        <div className="nav nav-x flex items-center w-2/3 h-12 ">
          <a href={github} rel="noopener noreferrer" target="_blank">
            <Github />
          </a>
          <a href={twitter} rel="noopener noreferrer" target="_blank">
            <Twitter />
          </a>
          <a href={telegram} rel="noopener noreferrer" target="_blank">
            <Telegram />
          </a>
          <a href={email} rel="noopener noreferrer" target="_blank">
            <Mail />
          </a>
          <a href={music} rel="noopener noreferrer" target="_blank">
            <Music />
          </a>
          <a href={blog} rel="noopener noreferrer" target="_blank">
            <Moon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Side
