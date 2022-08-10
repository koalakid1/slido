import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import HeaderCategory from './category/category';
import { CategoryProps } from './headerType';

const Header = () => {
    const [header, setHeader] = useState<CategoryProps[]>([]);
    const login:CategoryProps = {id:1000, name:"log in", subCategories: []};
    const [isScrollTop, setIsScrollTop] = useState<boolean>(true)
    useEffect(() => {
        async function fetchMenuList() {
            const res = await fetch("/mock/categories.json");
            const result = await res.json();
            setHeader(result.header);
        }
        
        fetchMenuList();
    }, []);

    window.addEventListener('scroll', () => {
        setIsScrollTop(window.scrollY === 0)
    })
    
    return (
        <StyledHeader isScrollTop={isScrollTop}>
            <StyledImage src="/icons/ic_logo.svg" alt="slido logo" />
            <StyledMenuWrapper>
                {header.map(category => (
                <HeaderCategory key={category.id} category={category}></HeaderCategory>
                ))}
            </StyledMenuWrapper>
            <StyledAccoutWrapper>
                <HeaderCategory key={login.id} category={login}></HeaderCategory>
                <StyledSignUpButton>Sign Up</StyledSignUpButton>
            </StyledAccoutWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.div<{isScrollTop:boolean}>`
    margin: 0 auto;
    z-index: 1000;
    background-color: #fff;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:sticky;
    top: 0;

    ${props => (!props.isScrollTop && css`
            box-shadow: 0 0.125rem 0.125rem rgba(0,0,0,0.1);
    `)}
`

const StyledImage = styled.img`
    margin-left:10rem;
    width: 5rem;
    margin-right:5rem;
`

const StyledMenuWrapper = styled.div`
    display: inline-flex;


`

const StyledAccoutWrapper = styled.div`
    display: flex;
    width: 20rem;
`

const StyledSignUpButton = styled.button`
    background-color: #31A129;
    color: white;
    border-radius: 0.25rem;
    border: none; 
    padding: 0 1rem;
    &:hover {
        background-color: black;
    }

`

export default Header;