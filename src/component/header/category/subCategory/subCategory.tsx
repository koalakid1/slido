import React from 'react';
import styled from 'styled-components';
import { SubCategoryProps } from '../../headerType';

const HeaderSubCategory = ({subCategory}:{subCategory:SubCategoryProps}) => {
    return (
            <StyledRightSubCategoryWrapper>
                <StyledIcon src={subCategory.icon} alt={subCategory.name+" icon"}></StyledIcon>
                <StyledTitle>{subCategory.name}</StyledTitle>
                <StyledDescription>{subCategory.description}</StyledDescription>
                <StyledLink href={subCategory.name}><h3>Learn more</h3></StyledLink>
            </StyledRightSubCategoryWrapper>
    );
};

const StyledRightSubCategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 2rem;
    width: 24rem;
    vertical-align: sub;
    background-color: white;
`

const StyledIcon = styled.img`
    width: 5rem;
    margin-bottom: -0.5rem;
`

const StyledTitle = styled.h2`
    margin-bottom: -0.5rem;
`

const StyledDescription = styled.p`
    line-height: 1.5rem;
    margin-bottom: -0.5rem;
`

const StyledLink = styled.a`
    color: #31A129;
    &:hover {
        text-decoration:none;
    }
`

export default HeaderSubCategory;