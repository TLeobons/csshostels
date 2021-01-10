import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Turn Up</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Oswald:wght@300;600&display=swap" rel="stylesheet"/>
      </Head>

      <Nav>
        <NavContainer>
          <div>
            <div>Turn Up</div>
          </div>
          <div>
            <MenuItem>What I do</MenuItem>
            <MenuItem>Cases</MenuItem>
            <MenuItem>Contacts</MenuItem>
            <MenuItem>Me</MenuItem>
          </div>
        </NavContainer>
      </Nav>
    </Container>
  )
}
const Container = styled.div`
  font-family: 'Oswald', sans-serif;
`
const Nav = styled.nav`
  background-color: cyan;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`
const NavContainer = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`
const MenuItem = styled.div`
  display: inline;
  margin: 20px;
`
