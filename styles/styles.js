import styled from "styled-components";

export const Header = styled.div`
width: 100%;
height: 80px;
background-color: #52B3DC;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
`;

export const Main = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const HText = styled.h1`
font-size: 40px;
text-align: center;
font-weight: 400;
`;

export const Text = styled.p`
font-size: 20px;
text-align: center;
font-weight: 400;
`;

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const ConnectBox = styled.div`
width: 350px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url('/assets/CBG.png');
  background-position: center;
  background-size: cover;
  border-radius: 25px;
`;

export const CButton = styled.button`
width: 150px;
height: 50px;
background-color: white;
color: #329ACF;
font-weight: bold;
font-family: "BEB";
font-size: 20px;
border-radius: 15px;
border: none;
font-weight: 400;
:hover {
    box-shadow: 0 0 0 2px #92E5FF;
}
`;

export const GreenButton = styled.button`
width: 150px;
height: 50px;
background-color: #4ADF59;
color: white;
font-weight: bold;
font-family: "BEB";
font-size: 20px;
border-radius: 15px;
border: 2px solid white;
font-weight: 400;
:hover {
    box-shadow: 0 0 0 2px white;
}
`;

export const IMGDiamond = styled.img`
width: 220px;
@media (max-width: 600px) {
 display: none;
}
`;

export const MintButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const LeftDiamond = styled.div`
position: relative;
left: 25px;
z-index: 5;
`;

export const RightDiamond = styled.div`
position: relative;
right: 25px;
z-index: 5;
`;

export const AmountWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 30px;
`;


export const AmountButton = styled.button`
width: 35px;
height: 35px;
background-color: #FFFFFF;
color: #329ACF;
font-weight: bold;
font-family: "BEB";
font-size: 35px;
text-align: center;
border-radius: 10px;
border: 2px solid #92E5FF;
font-weight: 400;
display: flex;
    align-items: center;
    justify-content: center;
:hover {
    box-shadow: 0 0 0 2px #92E5FF;
}
`;

export const AmountBack = styled.div`
background-color: white;
color: #329ACF;
font-size: 35px;
width: 70px;
height: 60px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #92E5FF
`;

export const TotalPrice = styled.div`
background-color: white;
color: #747070;
font-size: 20px;
width: 120px;
height: 30px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #92E5FF
`;
