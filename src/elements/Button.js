import styled from "styled-components";

const Button = styled.button`
    padding: ${(props) => props.search ? '10px 15px' : '10px 40px'};
    color: #fff;
    background-color: #607187;
    border: none;
    border-radius: ${(props) => props.search ? '50%' : '5px'};
    cursor: pointer;
    transition: 0.3s ease-in;
    text-decoration: none;
    margin: ${(props) => props.login ? '15px 0 0 0' : '0'}
    width: ${(props) => props.login ? '100%' : ''};

    &:hover{
        background-color: #3E4957;
    }

    @media(min-width: 768px){
        width: ${(props) => props.login ? '40%' : ''};
    }
`;

export default Button;