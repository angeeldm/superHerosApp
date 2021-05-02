import styled from "styled-components";

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    img{
        width: 30%;
    }
`;

const ModalTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    margin: 10px 0;
`;

const ModalInfo = styled.p`
    font-size: 16px;
`;

const CloseBtn = styled.button`
    color: #000;
    border: none;
    border-radius: 50%;
    padding: 5px 10px;
    background-color: #9F9F9F;
    cursor: pointer;
    margin: 10px 0;
    position: absolute;
    top: -20px;
    right: -10px;
`;

export {ModalContent, ModalInfo, ModalTitle, CloseBtn};