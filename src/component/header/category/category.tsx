import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { CategoryProps, SubCategoryProps } from '../headerType';
import HeaderSubCategory from './subCategory/subCategory';


const HeaderCategory = ({category}:{category: CategoryProps}) => {
    const name = category.name
    const subCategories: SubCategoryProps[] = category.subCategories;
    const hasSubCategory =() => subCategories.length !== 0
    const hasRightSubCategory = () => hasSubCategory() && subCategories[0].description !== ""
    const [hide, setHide] = useState(true)
    const [pick, setPick] = useState<number>(hasSubCategory() ? subCategories[0].id : 0)
    const [rightSubCategory, setRightSubCategory] = useState<SubCategoryProps|null>(hasSubCategory() && hasRightSubCategory() ? subCategories[0] : null)
    
    return (
        <StyledCategoryWrapper onMouseEnter={() => setHide(false)} onMouseLeave={() => {
            setHide(true)
            setPick(hasSubCategory() ? subCategories[0].id : 0)
            hasRightSubCategory() && setRightSubCategory(subCategories[0])
        }} >
            <StyledCategoryButton 
                hasSubCategory={hasSubCategory()}
            >
                {name}
            </StyledCategoryButton>
            {hasSubCategory() &&
                <StyledSubCategoryWrapper className= {hide ? 'hide' : ''}>
                <StyledLeftSubCategoryWrapper>
                {subCategories.map(subCategory=>(
                    <StyledLeftSubCategory 
                        key={subCategory.id} 
                        isPick = {pick === subCategory.id}
                        hasRightSubCategory = {hasRightSubCategory()}
                        onMouseOver={() => {
                            hasRightSubCategory() && setRightSubCategory(subCategory)
                            setPick(subCategory.id)
                        }}
                    >{subCategory.name}</StyledLeftSubCategory>
                ))}
                </StyledLeftSubCategoryWrapper>
                {rightSubCategory && <HeaderSubCategory subCategory={rightSubCategory}></HeaderSubCategory>}
                </StyledSubCategoryWrapper>}
        </StyledCategoryWrapper>
    );
};

const StyledCategoryWrapper = styled.div`
    position: relative;
`

const StyledCategoryButton = styled.button<{hasSubCategory:boolean}>`
    margin: 1rem;
    font-size: 1rem;
    background-color: white;
    border: none;
    ${(props) => !props.hasSubCategory && css`
        &:hover {
            text-decoration: underline;
            color: #31A129;
        }
  `}
`

const StyledSubCategoryWrapper = styled.div`
    display: flex;
    position: absolute;
    z-index: 1000;
    margin-top: -1rem;
    margin-left: 1rem;

    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
    &.hide{
        display: none
    }
    width: fit-content;
`

const StyledLeftSubCategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    width: fit-content;
`

const StyledLeftSubCategory = styled.button<{isPick:boolean, hasRightSubCategory:boolean}>`
    border: none;
    background-color: white;
    white-space : nowrap; 
    width: 100%;
    text-align: left;
    padding: 1rem 2rem;

    ${(props) => props.isPick && css`
        background-color: #f2f2f2;
    `}

    ${(props) => props.hasRightSubCategory && css`
        border-right: 0.1rem solid #f2f2f2;
    `}
`

export default HeaderCategory;