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
@media (max-width: 600px) {
  justify-content: flex-end;
  padding-right: 40px;
}
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
margin: 0;
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

export const ClaimBox = styled.div`
width: 350px;
min-height: 500px;
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
height: 40px;
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

export const ClaimButton = styled.button`
width: 100px;
height: 50px;
background-color: #F5841F;
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

export const ClaimButtonC= styled.button`
width: 100px;
height: 30px;
background-color: #F5841F;
color: white;
font-weight: bold;
font-family: "BEB";
font-size: 20px;
border-radius: 5px;
border: 2px solid white;
font-weight: 400;
:hover {
    box-shadow: 0 0 0 2px white;
}
`;

export const IMGDiamond = styled.img`
width: 220px;
@media (max-width: 800px) {
  width: 150px;
}
@media (max-width: 600px) {
 display: none;
}
`;

export const MintButtonWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`;

export const LeftDiamond = styled.div`
position: relative;
z-index: 5;
`;

export const RightDiamond = styled.div`
position: relative;
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
width: 50px;
height: 50px;
background-color: #FFFFFF;
color: #329ACF;
font-weight: bold;
font-family: "BEB";
font-size: 60px;
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
font-size: 50px;
width: 80px;
height: 80px;
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


export const IDWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
align-items: center;
`;

export const IDS = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
align-items: center;
`;

export const HR = styled.hr`
width: 80%;
height: 2px;
background-color: white;
border: 1px solid white
`;

export const TopDiv = styled.div`
display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const ClaimWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    @media (max-width: 600px) {
      margin-top: 70px;
      justify-content: flex-end;
      width: 80%;
}
`;