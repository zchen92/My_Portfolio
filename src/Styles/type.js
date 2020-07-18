import styled from 'styled-components';

// H Levels
//HeaderOne can be named anything but needs to be uppercase
export const HeaderOne = styled.h1`
    font-size:1.5rem;
    text-align:left;
    @media screen and (min-width: 768px) {
        font-size:1rem;
        text-align:right;
    }
`;

export const HeaderTwo = styled.h2`
    font-size:${props => props.larger ? '3rem' : '2rem'};
    text-align: ${props => props.align ? props.align : 'initial'};
    margin: 3rem 0;
    @media screen and (min-width 768px) {
        font-size:${props => props.larger ? '6rem' : '1.6rem'};
    }
`;

export const HeaderThree = styled.h3`
    font-size:1.2rem;
    margin-bottom: .5rem;
    @media screen and (min-width: 768px) {
        font-size:1.3rem;
    }
`;

export const SmallFlex = styled.small`
    display: flex;
    > div{
        margin: 0 .5rem 0 0;
    }
`;

export const BannerImage = styled.div`
    margin:2rem 0;
    img {
        width:100%;
    }
`;

export const BodyText = styled.div`
    font-size:1.5rem;
    line-height:1.8rem;
    @media screen and (min-width 768px) {
        font-size:1.8rem;
        line-height:2.2rem;
        max-width:900px;
        margin 0 auto;
    }
`;

