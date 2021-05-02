import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import {Container, Title} from './elements/Header';
import Button from './elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {HerosContainer, HeroCard, HeroName, HeroBtn} from './elements/ListContent';
import MyTeam from './components/MyTeam';
import Alert from './elements/Alert';

function App() {
  const [character, setCharacter] = useState([]);                       //ESTADO PARA ALMACENAR LOS PERSONAJES BUSCADOS
  const [characterSearched, setCharacterSearched] = useState('');       //ESTADO PARA MANEJAR EL VALOR DEL INPUT
  const [heroTeam, setHeroTeam] = useState([]);                         //ESTADO PARA ALMACENAR LOS PERSONAJES AGREGADOS 
  const [alert, setAlert] = useState({});                               // ESTADOS DE ALERTA
  const [alertState, setAlertState] = useState(false);

  const handleChange = (e) => {
    setCharacterSearched(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(characterSearched === ''){
      setAlertState(true);
      setAlert({
        type: "error",
        message: "Debes completar los campos"
    });
    } else{
      const SearchCharacter = async () => {
        try {
          const url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10226357904359452/search/${characterSearched}`;
          const response = await fetch(url);
          const result = await response.json();
          const characterData = await result;
          // console.log(result.results);
          setCharacter(characterData.results);
          return;
        } catch (error) {
          console.log(error);
        }
      }
      return SearchCharacter();
    }
  }

  const handleClick = async (e) => {
    const heroPicked = e.target.parentElement.id;

    if(heroTeam.length < 6){
      try {
        const url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10226357904359452/${heroPicked}`;
        const response = await fetch(url);
        const result = await response.json();
        const dataHero = await result;
        // console.log(result);
        setHeroTeam([...heroTeam, dataHero]);
        return;
      } catch (error) {
        console.log(error);
      }
    } else{
      setAlertState(true);
      setAlert({
        type: "error",
        message: "Alcanzaste el limite de heroes"
      });
    }
  }

  const deleteHero = (id) => {
    setHeroTeam(heroTeam.filter((hero) => hero.id !== id));
  }

  return (
    <Container>
      <Title>X Force</Title>

      <FormSearch onSubmit={handleSubmit} >
        <Input placeholder="Buscar Personajes" value={characterSearched} onChange={handleChange} />
        <Button search > <FontAwesomeIcon icon={faSearch} /> </Button>
      </FormSearch>

      <HerosContainer >
        {character && character.length > 0 ? 
          character.map((item) => {
            return(
                <HeroCard key={item.id} id={item.id}>
                  <img src={item.image.url} alt="HeroImg" />
                  <HeroName>{item.name}</HeroName>
                  <HeroBtn onClick={handleClick}>Agregar</HeroBtn>
                </HeroCard>
            );
          })
          :
          ''
        }
      </HerosContainer>

      <MyTeam heroTeam={heroTeam} deleteHero={deleteHero}/>
      <Alert type={alert.type} message={alert.message} alertState={alertState} setAlertState={setAlertState}/>
    </Container>
  );
}

const FormSearch = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  width: 100%;

  @media(min-width: 768px){
    width: 30%;
  }
`;

const Input = styled.input`
  padding: 10px 20px;
  margin: 0 10px 0 0;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  border: 1px solid #c1c1c1;

  @media(min-width: 768px){
    padding: 10px 60px;
  }
`;

export default App;
