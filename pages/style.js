import styled from 'styled-components'


export const Container = styled.div ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`

export const Conteudo  = styled.main `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
    }
    background-color: black;
`

export const Header = styled.header `
    margin-top: 80px;
    margin-left: 80px;
    display: flex;
    flex-direction: row;
`


export const SobreMim = styled.div `
    width: 600px;
    height: 500px;
    background-color: black;
    margin-left: 300px;
    padding: 10px;
`

export const NavBar = styled.div ` 
    width: auto;
    height: auto;
    margin-left: 900px;
    display: flex;
    flex-direction: row;
    @media(max-width: 800px) {
        display: flex;
        flex-direction: row;
        margin-left: 10px;
       
    }
    
`

export const Footer = styled.footer `
    margin-top: 80px;
    width: 100%;
    height: 20px;
    border-top: 1px solid white;
`


export const NavigationWebFont = styled.h2 `
    margin-left: 15px;
    color: white;
  :hover {
    cursor: pointer;
    border-bottom: 1px solid white;
  }
` 