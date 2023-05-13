import { GlobalStyle } from 'components/GlobalStyles';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Container, Header, Navigation, StyledNavLink } from './Layout.styled';

const { Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="movies">Movies</StyledNavLink>
        </Navigation>
      </Header>
      <Container>
        <main>
          <Suspense
            fallback={
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <GlobalStyle />
      </Container>
    </div>
  );
};

export default Layout;
