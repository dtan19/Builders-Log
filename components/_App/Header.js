import {Menu, Container, Image, Icon} from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";

Router.onRouteChangeStart = () => nProgress.start()
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

function Header() {
  const router = useRouter();
  const user = false;

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
            ProtoDesk
          </Menu.Item>
        </Link>
        <Link href="/airplanes">
          <Menu.Item header active={isActive('/airplanes')}>
            <Icon
              name="plane"
              size="large"
      
            />
            Airplanes
          </Menu.Item>
        </Link>
        <Link href="/builders">
          <Menu.Item header active={isActive('/builders')}>
            <Icon
              name="wrench"
              size="large"
            />
            Builders
          </Menu.Item>
        </Link>
        <Link href="/checklists">
          <Menu.Item header active={isActive('/checklists')}>
            <Icon
              name="clipboard check"
              size="large"
            />
            Checklists
          </Menu.Item>
        </Link>
        <Link href="/lasercuts">
          <Menu.Item header active={isActive('/lasercuts')}>
            <Icon
              name="clipboard check"
              size="large"
            />
            Laser Cuts
          </Menu.Item>
        </Link>
        <Link href="/create">
          <Menu.Item header active={isActive('/create')}>
            <Icon
              name="clipboard check"
              size="large"
            />
            Pricing Sheets
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
        {user ? (<>
        <Link href="/account">
          <Menu.Item header active={isActive('/account')}>
            <Icon
              name="user"
              size="large"
            />
            My Builds
          </Menu.Item>
        </Link>
        <Link href="/signout">
        <Menu.Item header active={isActive('/signout')}>
            <Icon
              name="sign out"
              size="large"
            />
            Sign Out
        </Menu.Item>
        </Link>
        </>)
        :
        (<>
        {user && (<Link href="/create">
          <Menu.Item header>
            <Icon
              name="fork"
              size="large"
            />
            Join
          </Menu.Item>
        </Link>)}
        <Link href="/login">
          <Menu.Item header>
            <Icon
              name="sign in"
              size="large"
            />
            Sign In
          </Menu.Item>
        </Link>
        </>)}
      </Container>
    </Menu>
  )
}

export default Header;
