import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items:center;
    justify-content: space-between;
    font-size: 14px;
    font-weight:500;
`;

const Announcement = () => {
    return (
        <Container>
            <p></p>
            <p>Now on The Last Hunt ⤤: 40-75% OFF 💥</p>
            <p style={{marginRight:100}}>Toll-free 1 800 729-0322</p>
            
        </Container>
    )
}

export default Announcement;
