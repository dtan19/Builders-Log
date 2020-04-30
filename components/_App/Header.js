import {Menu, Container, Image, Icon} from 'semantic-ui-react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';

Router.onRouteChangeStart = () => nProgress.start()
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

function Header({ user }) {
  const router = useRouter();
  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

function isActive (route) {
  return route === router.pathname;
}


  return (
    <Menu stackable fluid id="menu" inverted>
      <Container >
        <Link href="/">
          <Menu.Item header active={isActive('/')}>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: '1em'}}
            />
            Builder's Logbook
          </Menu.Item>
        </Link>
        <Link href="/homepage">
          <Menu.Item header active={isActive('/homepage')}>
            <Image
              name="home"
              size="mini"
            />
            Home
          </Menu.Item>
        </Link>
        <Link href="/orders">
          <Menu.Item header active={isActive('/orders')}>
            <Icon
              name="plane"
              size="large"
            />
            Orders
          </Menu.Item>
        </Link>
        {user && (<Link href="/builders">
          <Menu.Item header active={isActive('/builders')}>
            <Icon
              name="wrench"
              size="large"
            />
            Logs
          </Menu.Item>
        </Link>)}
        <Link href="/createlog">
        <Menu.Item header active={isActive('/createlog')}>
          <Icon
            name="clipboard check"
            size="large"
          />
          Create Log
        </Menu.Item>
      </Link>
      {user && (<Link href="/coins">
          <Menu.Item header active={isActive('/coins')}>
            <Icon
              name="clipboard check"
              size="large"
            />
            Coins
          </Menu.Item>
        </Link>)}
        <Link href="/createcoin">
          <Menu.Item header active={isActive('/createcoin')}>
            <Icon
              name="clipboard check"
              size="large"
            />
            Create Coin
          </Menu.Item>
        </Link>
        <Link href="/cart">
          <Menu.Item header active={isActive('/cart')}>
            <Icon
              name="cart"
              size="large"
            />
            Cart
          </Menu.Item>
        </Link>
        {isRootOrAdmin && (
        <Link href="/account">
          <Menu.Item header active={isActive('/account')}>
            <Icon
              name="clipboard check"
              size="large"
            />
            Create
          </Menu.Item>
        </Link>
        )}

        {user ? (<>
        <Link href="/account">
          <Menu.Item header active={isActive('/account')}>
            <Icon name="user" size="large" />
            Account
          </Menu.Item>
        </Link>

        <Menu.Item onClick={handleLogout} header>
            <Icon
              name="sign out"
              size="large"
            />
            Sign Out
        </Menu.Item>
        </>)
        :
        (<>
        <Link href="/login">
          <Menu.Item header>
            <Icon
              name="fork"
              size="large"
            />
            Login
          </Menu.Item>
        </Link>
        <Link href="/signup">
          <Menu.Item header>
            <Icon
              name="sign in"
              size="large"
            />
            Sign Up
          </Menu.Item>
        </Link>
        </>)}
      </Container>
    </Menu>
  )
}

export default Header;
