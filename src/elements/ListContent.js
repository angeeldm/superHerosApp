import styled from "styled-components";

const HerosContainer = styled.div`
    display: grid;
    gap: 15px 10px;
    margin: 30px 0;
    width: 70%;
    justify-content: ${(props) => props.main ? 'space-between' : ''};

    @media(min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        margin: 10px 0;
        width: ${(props) => props.main ? '90%' : '70%'};
    }
    
    @media(min-width: 998px){
        grid-template-columns: repeat(3, 1fr);
    }
`;

const HeroCard = styled.div`
    background-color: #A4A4A4;
    border-radius: 5px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

const HeroName = styled.h3`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
    margin: 5px 0;
`;

const HeroBtn = styled.button`
    padding: 5px 10px;
    color: #C1C1C1;
    background-color: ${(props) => props.delete ? '#DA2B2B' : '#607187'};
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    cursor: pointer;
`;

const HeroInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: left;
    width: 100%;
    margin-bottom: 10px;
`;

const HeroStats = styled.p`
    color: #000;
    font-size: 14px;
`;

const Message = styled.p`
  grid-column: 1 / 4;
  font-size: 40px;
  color: #C1C1C1;
  margin-top: 60px;
`;

export {HerosContainer, HeroCard, HeroName, HeroBtn, HeroInfo, HeroStats, Message};
