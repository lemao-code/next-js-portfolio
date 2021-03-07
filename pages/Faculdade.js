import Image from 'next/image'
import Head from 'next/head'
export default function Faculdade () {
    return  (
        <body style={{margin: 0, height: "100%", backgroundColor: "black"}}>
            <style>
        {` 
          body {
            font-family: 'Roboto Mono', monospace;
            
          }
          
        `}
      </style>
      <Head>
        <title>Thiago Developer - Faculdade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h1 style={{color: "white", textAlign: "center"}} >Faculdade</h1>
                <div>
                  
                    <h3 style={{color: "white", padding: 30}}>Análise de Desenvolvimento de Sistemas - Universidade Paulista (2020-2021)</h3>
                    <dl style={{padding: 35}}>
                    <dt><h4 style={{color: "white"}}>Primeiro Ano</h4></dt>
                    <dd><h5 style={{color: "white"}}> Lógica </h5></dd>
                    <dd><h5 style={{color: "white"}}> Estatísticas </h5></dd>
                    <dd><h5 style={{color: "white"}}> Fundamentos Sistemas Operacionais </h5></dd>
                    <dd><h5 style={{color: "white"}}> Princípios de Sistemas de Informação </h5></dd>
                    <dd><h5 style={{color: "white"}}> Organização de Computadores </h5></dd>
                    <dd><h5 style={{color: "white"}}> Desenvolvimento Sustentável </h5></dd>
                    <dd><h5 style={{color: "white"}}> Engenharia de Software I </h5></dd>
                    <dd><h5 style={{color: "white"}}> Linguagens e Técnicas de Programação </h5></dd>

                    <dt><h4 style={{color: "white"}}>Segundo Ano</h4></dt>
                    <dd><h5 style={{color: "white"}}> Engenharia de Software II </h5></dd>
                    <dd><h5 style={{color: "white"}}> Programação Orientado a Objetos I </h5></dd>
                    <dd><h5 style={{color: "white"}}> Projeto Interface com o usuário</h5></dd>
        
                    </dl>
                </div>
            </div>
        </body>
    )
}