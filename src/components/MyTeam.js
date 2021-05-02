import React, { useRef } from 'react';
import {Container} from '../elements/Header';
import {HerosContainer, HeroCard, HeroName, HeroInfo, HeroStats, HeroBtn, Message} from '../elements/ListContent';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {ModalContent, ModalInfo, ModalTitle, CloseBtn} from '../elements/ModalContent';
import {Redirect} from 'react-router-dom';

const MyTeam = ({heroTeam, deleteHero}) => {
    const ref = useRef();
    const closeTooltip = () => ref.current.close();
    const validateUser = localStorage.getItem('tokenId');

    if(validateUser){
        return (
            <Container>
                <h2>Mi Equipo</h2>    
                <HerosContainer main>
                    {heroTeam && heroTeam.length > 0 ?
                        heroTeam.map((hero)=>{
                        return(
                            <HeroCard key={hero.id}>
                                <img className="heroPrincipal" src={hero.image.url} alt="Hero"/>
                                <HeroName>{hero.name}</HeroName>
                                <h4>Habilidades</h4>
                                <HeroInfo>
                                        <HeroStats>Combate: {hero.powerstats.combat}</HeroStats>
                                        <HeroStats>Resistencia: {hero.powerstats.durability}</HeroStats>
                                        <HeroStats>Inteligencia: {hero.powerstats.intelligence}</HeroStats>
                                        <HeroStats>Poder: {hero.powerstats.power}</HeroStats>
                                        <HeroStats>Velocidad: {hero.powerstats.speed}</HeroStats>
                                        <HeroStats>Fuerza: {hero.powerstats.strength}</HeroStats>
                                    </HeroInfo>
        
                                <HeroInfo>
                                    <Popup modal trigger={<HeroBtn>Ver Info</HeroBtn>} nested ref={ref}>
                                        <ModalContent>
                                                <CloseBtn onClick={closeTooltip}>&times;</CloseBtn>
                                                <img src={hero.image.url} alt="Hero"/>
                                                <ModalTitle>{hero.name}</ModalTitle>
                                                <ModalInfo>Nombre: {hero.biography["full-name"]}</ModalInfo>
                                                <ModalInfo>Alias: {hero.biography.aliases.slice(0, 2).join(" - ")}</ModalInfo>
                                                <ModalInfo>Trabajo: {hero.work.occupation.slice()}</ModalInfo>
                                                <ModalInfo>Raza: {hero.appearance.race}</ModalInfo>
                                                <ModalInfo>Peso: {hero.appearance.weight[1]}</ModalInfo>
                                                <ModalInfo>Altura: {hero.appearance.height[1]}</ModalInfo>
                                                <ModalInfo>Color de cabello: {hero.appearance["hair-color"]}</ModalInfo>
                                                <ModalInfo>Color de ojos: {hero.appearance["eyes-color"]}</ModalInfo>
                                            </ModalContent>
                                    </Popup>
                                    <HeroBtn delete onClick={() => deleteHero(hero.id)}>Eliminar</HeroBtn>
                                </HeroInfo>
                            </HeroCard>
                        );
                    })
                            
                    : 
                        <Message>Arma tu equipo</Message>
                    }    
                </HerosContainer>
            </Container>
        );
    } else{
        <Redirect to="/" />
    }
    
}
 
export default MyTeam;