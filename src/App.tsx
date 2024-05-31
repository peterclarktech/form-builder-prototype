import { FC, useContext } from 'react';
import { Outlet } from 'react-router-dom'

import reactlogo from './assets/react.svg'

import AppContext, { AppContextWrapper } from './contexts/AppContext';
import Header from './components/Header'
import Footer from './components/Footer';

export default function App() {
  const year = new Date().getFullYear();

  return (
    <AppContextWrapper>
      <div className="flex flex-col min-h-svh text-black bg-white dark:bg-gray-dark dark:text-white">
        <HeaderWrapper />
        <Outlet />
        <Footer>
          <span>Company Name, Inc. &copy;{year}</span>
        </Footer>
      </div>
    </AppContextWrapper>
  )
}

//separated into wrapper component so you can access appContext
const HeaderWrapper:FC<{}> = () => {
  const appContext = useContext(AppContext);
  return (
    <Header.HeaderBody>
      <Header.HeaderLogo linkto="/" imgSrc={reactlogo} imgAlt="React" imgClass="">React Boilerplate Project</Header.HeaderLogo>
      <Header.HeaderLink to="/" iconClass="bi bi-house">Home</Header.HeaderLink>
      {appContext.user.username && <Header.HeaderLink to="/crudsample/users" iconClass="bi bi-journal-richtext">CRUD Samples</Header.HeaderLink>}
    </Header.HeaderBody>
  )
}