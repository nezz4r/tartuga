import styled from 'styled-components';

export const Wrapper = styled.div`
`;
export const Header = styled.header`
    background: white;
    border-bottom: 1px solid #e1e1e1;
`;
export const HeaderContent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 74px;
`;
export const Logo = styled.img`
    width: 60px;
`;

export const Nav = styled.nav`
    a {
        margin: 0 10px;
        padding: 0 5px;
        text-decoration: none;
        color: #333;
    }
`;

export const Content = styled.div`
    padding: 50px 0; 
    max-height: calc(100vh - 76px);
`;

export const File = styled.div`
    margin: 0 0 15px 0;
`;
export const ListItem = styled.tr`
    cursor: pointer;
    transition: .2s;
    &:hover {
        background: #e1e1e1;
    }
`;