import styled from 'styled-components'

const Container = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: #FCEBEB;
    transition: all ease 0.3s;
    /* box-shadow: 0px 0px 10px 10px rgba(0,0,0, 0.13); */

    &:hover {
        box-shadow: 0px 5px 10px 0px rgba(0,0,0, 0.13);
        transform: translateY(-5px);
    }
`

const Card = ({ className }) => {
    return (
        <Container className={className}>Card content</Container>
    );
}

export default Card;