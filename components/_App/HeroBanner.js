import { Container } from "semantic-ui-react";

const style = {
  'position': 'fixed',
  'top': 0, 
  'left': 0,
  'min-width': '100%',
  'min-height': '100%'
}

function Hero({ children, user }) {
  return (
    <>
      <Container text style={{ paddingTop: "1em" }}>
        {children}
      </Container>
    </>
  );
}

export default Hero;
