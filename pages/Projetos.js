import { ContainerProjetos } from './style'

function Projetos () {

    const data = [{
        "projetoNome": "Rifa Digital",
        "desc": "Com Rifa Digital Web, você pode comprar rifas online e támbem anunciar!",
        "techs": {
            "backend": {
                "nodejs": <img src="nodejs.svg" width="30" height="30"/>,
                "pg": <img src="pg.ico" width="30" height="30" />,
                "aws": <img src="aws.svg" width="30" height="30" />
            },
            "frontend": {
                "react": <img src="atom.svg" width="30" height="30"/>,
                "js": <img src="javascript.svg" width="30" height="30"/>,
                "html": <img src="html-5.svg" width="30" height="30"/>,
                "css": <img src="css.svg" width="30" height="30"/>
            }

        }
    },
    {
        "projetoNome": "Rifa Digital222",
        "desc": "Com Rifa Digital web, você pode comprar rifas online e támbem anunciar!",
        "techs": {
            "backend": {
                "nodejs": <img src="atom.svg" width="30" height="30"/>,
                "pg": <img src="pg.ico" width="30" height="30" /> 
            }


        }
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

            <h2 style={{color: "white"}}>{data[0].projetoNome}</h2>
            <h3 style={{color: "white"}}>{data[0].desc}</h3>
            <div style={{display: "flex", flexDirection: "row", margin: 10}}>
                <div style={{marginLeft: 10}}> {data[0].techs.backend.nodejs} </div>
                <div style={{marginLeft: 10}}> {data[0].techs.backend.pg} </div>
                <div style={{backgroundColor: "white", width: 30, height: 30, borderRadius: 10, marginLeft: 10}}>
                    {data[0].techs.backend.aws}
                </div>
            </div>
            
        </ContainerProjetos>
        </body>
    )
}

export default Projetos