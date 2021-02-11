import Head from 'next/head'
import  Image from 'next/image'
import { Container, Conteudo,Header, SobreMim, NavBar, Footer } from './style'

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
      <Header>
        <h1 style={{color: "white", }}>Welcome my portfolio</h1>
        <NavBar>
        <h2 style={{color: "white", marginRight: 30}}>Projetos</h2>
        <h2 style={{color: "white"}}>Faculdade</h2>
        </NavBar>
      </Header>
    <Container>
      <Head>
        <title>Thiago Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Conteudo>
      <Image responsive="true" src="/developer.jpeg" width={600} height={500} />
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
