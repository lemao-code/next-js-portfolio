import { ContainerProjetos } from './style'
import Link from 'next/link'

function Projetos () {
    const nodejss = <img src="nodejs.svg" width="50" height="50"/>
    const pg = <img src="pg.ico" width="50" height="50" />
    const aws = <img src="aws.svg" width="50" height="50" />
    const react =  <img src="atom.svg" width="50" height="50"/>
    const js =  <img src="javascript.svg" width="50" height="50"/>
    const html = <img src="html-5.svg" width="50" height="50"/>
    const css = <img src="css.svg" width="50" height="50"/>
    const gitHub = <img src="gitHub.svg" width="50" height="50"/>
    const rifaVideo = <video width="700" height="500" controls> 
    <source src="rifa.mp4" type="video/mp4" /> 
    <source src="movie.ogg" type="video/ogg" /> 
    </video>

  

    const data = [{
        "projetoNome": "Rifa Digital",
        "desc": "Com Rifa Digital Web, você pode comprar rifas online e támbem anunciar!",
        "techs": [nodejss,pg,aws,react,js,html,css],
        "video": rifaVideo,
        "github": "https://github.com/lemao-code/Rifa-Digital"
    },
    {
        "projetoNome": "Rifa Digital",
        "desc": "Com Rifa Digital Web, você pode comprar rifas online e támbem anunciar!",
        "techs": [nodejss,pg,aws,react,js,html,css],
        "video": null,
        "github": null,
    }]

    return (
        <body style={{margin: 0, height: "100%", backgroundColor: "black"}}>
            <style>
            {` 
            body {
            font-family: 'Roboto Mono', monospace;
            
            }
            `}
        </style>
        <ContainerProjetos>
            <h1 style={{color: "white" , textAlign: "center"}}>Projetos</h1>
            {data.map((element) => {
                
                return (
                    <div style={{marginLeft: 15, backgroundColor: "#1C1C1C", marginTop: 30, width: 800, borderRadius: 30, padding: 30}}>
                        <h2 style={{color: "white"}}>{element.projetoNome}</h2>
                        {element.video}
                        <h3 style={{color: "white"}}>{element.desc}</h3>
                        <div style={{display: "flex", flexDirection: "row", margin: 10}}>
                       
                            <div style={{display: "flex", flexDirection: "row",marginRight: 10, backgroundColor: "white", borderRadius: 25}}>
                                {element.techs.map((icon) => {
                                    return (
                                        <div style={{margin: 10}} >
                                            {icon}
                                        </div>
                                    )
                                })}
                            </div>
                            <div style={{marginLeft: 40, display: "flex", flexDirection: "row"}}>
                                <h4 style={{color: "white", marginRight: 30}}>Repositório</h4>
                            <a href={element.github}>{gitHub}</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </ContainerProjetos>
        </body>
    )
}

export default Projetos