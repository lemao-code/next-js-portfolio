import Head from 'next/head'
import  Image from 'next/image'
import Link from 'next/link'
import { Container, Conteudo,Header, SobreMim, NavBar, Footer, NavigationWebFont} from './style'

export default function Home() {
  return (
    <body style={{margin: 0, height: "100%", backgroundColor: "black"}}>
      
      <style>
        {` 
          body {
            font-family: 'Roboto Mono', monospace;
            
          }
          
        `}
      </style>
    <Container>
      <Head>
        <title>Thiago Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1 style={{color: "white", }}>Welcome my portfolio</h1>
      </Header>
      <NavBar>
        <Link href="/Projetos"><NavigationWebFont>Projetos</NavigationWebFont></Link>
        <Link href="/Faculdade"><NavigationWebFont>Faculdade</NavigationWebFont></Link>
      </NavBar>
      <Conteudo>
        <Image responsive="true" src="/developer.jpeg" width={500} height={500} />
        <SobreMim>
          <h2 style={{color: "white"}}>Apresentação</h2>
          <p style={{color: "white", fontSize: 24}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </SobreMim>
      </Conteudo>
      <Footer>
        <h3 style={{color: "#00FFFF", textAlign: "center"}}>Portfolio made by me</h3>
      </Footer>
    </Container>
    </body>
  )
}
