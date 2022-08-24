import React, { useState, useEffect } from 'react'
import * as s from '../styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import toast, { Toaster } from 'react-hot-toast';
import ABI from './abi.json'
import ABI2 from './abi2.json'


const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        56: 'https://bsc-dataseed4.ninicoin.io',
        97: 'https://data-seed-prebsc-2-s2.binance.org:8545'
      }
    }
  }
};

function Connect() {

  const ToEther = ethers.utils.formatEther;
  const ToWei = ethers.utils.parseEther;
  const toHex = (num) => {
      const val = Number(num);
      return "0x" + val.toString(16);
    };

    const ContractAddress = '0x7777902e3926f195DBC1392876B2cF1C468a7777';
    const BUSDAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
    const ChainID = 56;
  const [Account, setAccount] = useState(null);
  const [NFTContract, setNFTContract] = useState(null);
  const [BUSDContract, setBUSDContract] = useState(null);
  const [PRD, setPRD] = useState();
  const [MaxSupply, setMaxSupply] = useState(0);
  const [MintedSupply, setMintedSupply] = useState(0);
  const [Token, setToken] = useState(1);
  const [Price, setPrice] = useState(0.04);
  const [BUSDPrice, setBUSDPrice] = useState(10);

  const Connect = async() => {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions // required
    });
    try {
      toast.loading("Connecting...")
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      setPRD(provider);
      const signer = provider.getSigner();
      const accounts = await provider.listAccounts();
      const network = await provider.getNetwork();
      const NFTCT = new ethers.Contract(ContractAddress, ABI, signer);
      setNFTContract(NFTCT);
      const BUSDCT = new ethers.Contract(BUSDAddress, ABI2, signer);
      setBUSDContract(BUSDCT);
      const MaxS = await NFTCT.MAX_NFT_SUPPLY();
      setMaxSupply(Number(MaxS));
      const MintedS = await NFTCT.totalSupply();
      setMintedSupply(Number(MintedS));
      if (network.chainId === 56) {
        setAccount(accounts[0]);
        toast.dismiss();
        toast.success('Wallet Connected', {duration: 4000, style: {fontFamily: 'BEB'}});
      } else {
        toast.error('Wrong Network, Please Switch to BSC', {style: {fontFamily: 'BEB'}});
      }
    } catch (err) {
      toast.error(`${err}`);
    }
  };



  const IncrementTokens = () => {
    let NewToken = Token + 1;
        if(NewToken > 100) {
            NewToken = 100;
        }
        setToken(NewToken);
};

const DecrementTokens = () => {
    let NewToken = Token - 1;
    if(NewToken < 1) {
        NewToken = 1;
    }
    setToken(NewToken);
};

const MintBNB = async() => {
  toast.dismiss();
      toast.loading("Minting...");
  let price = ToWei(String(Token * Price));
  let gas = String(285000 * Token);
  try {
const Mint = await NFTContract.mintWithBNB(Token, {
  from: Account,
  gasLimit: gas,
  value: price
});
const TX = await Mint.wait().then('receipt', (rec) => {
  console.log(rec);
  toast.dismiss();
  toast.success("Mint was Successfull..");
}); 
} catch (err) {
  toast.dismiss();
  toast.error(String(err).substring(0,33));
  console.log(err)
}
};

const MintBUSD = async() => {
  let price = ToWei(String(Token * BUSDPrice));
  let gas = String(285000 * Token);
    try {
      toast.loading("You need to Approve the contract to use BUSD for Transaction");
      const Approve = await BUSDContract.approve(ContractAddress, price, {
        from: Account,
        gasLimit: gas
      });
      toast.dismiss();
      toast.loading("Minting...");
      const Mint = await NFTContract.mintWithBUSD(Token, {
        from: Account,
        gasLimit: gas
      });
      const TX = await Mint.wait().then('receipt', (rec) => {
        console.log(rec)
        toast.dismiss();
        toast.success("Mint was Successfull..");
      }); 
    } catch (err) {
      toast.dismiss();
      toast.error(String(err).substring(0,33));
      console.log(err)
    }
};

  useEffect(() => {
    window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
    });
    window.ethereum.on('chainChanged', (chain) => {
        if(chain !== toHex(ChainID)) {
            toast.error('Wrong Network, Please Switch to BSC', {style: {fontFamily: 'BEB'}});
        }
    });
}, [PRD]);


  return (
    <>
    {Account ? (
      <>
      <br></br>
      <s.ClaimWrapper>
      <Link href={'/Claim'} passHref>
      <s.ClaimButton>
      Claim
    </s.ClaimButton>
    </Link>
    </s.ClaimWrapper>
    <br></br>
      </>
    ) : (
      <>
      <br></br>
    <s.ClaimWrapper>
    <s.CButton onClick={(e) => {
        e.preventDefault();
        Connect();
    }}>
        Connect Wallet
    </s.CButton>
    </s.ClaimWrapper>
    <br></br>
      </>
    )}


    <s.Container>
          <Toaster />
    <s.IMGDiamond src='/assets/dm.png'/>

    {!Account ? (
      <>
      <s.ConnectBox  style={{justifyContent: 'flex-end'}}>
<div>
<Image src='/assets/JTD.png' width={100} height={50} alt='logo'/>
</div>
    <s.HText>
        NFT LOTTERY <br></br>
        <span style={{fontSize: 20}}>
        VOL 1
        </span>
    </s.HText>

    <div>
    <Image src='/assets/CDM.png' width={300} height={300} alt='logo'/>
    </div>
    </s.ConnectBox>
      </>
    ) : (
      <>
        <s.ConnectBox style={{justifyContent: 'space-around'}}>
        <s.TopDiv>
        <s.RightDiamond>
    <Image src='/assets/mintd.png' width={50} height={50} alt='logo'/>
    </s.RightDiamond>
    <s.HText style={{lineHeight: "40px"}}>
        1 in 10 <br></br>
        <span style={{fontSize: 25}}>
        wins up to<br></br>
        </span>
        <span style={{fontSize: 60}}>
        2000 $
        </span>
    </s.HText>
    <s.LeftDiamond>
    <Image src='/assets/mintd.png' width={50} height={50} alt='logo'/>
    </s.LeftDiamond>
    </s.TopDiv>
    <s.AmountWrapper>
      <s.AmountButton onClick={(e) => {
        e.preventDefault();
        DecrementTokens();
      }}>
        -
      </s.AmountButton>

      <s.AmountBack>
        {Token}
      </s.AmountBack>
      <s.AmountButton onClick={(e) => {
        e.preventDefault();
        IncrementTokens();
      }}>
        +
      </s.AmountButton>
    </s.AmountWrapper>

    <s.TotalPrice>
  {String(BUSDPrice * Token).substring(0,4)} USD
</s.TotalPrice>

    <s.MintButtonWrapper>
    <s.GreenButton onClick={(e) => {
      e.preventDefault();
      MintBNB();
    }}>
      Mint With BNB
    </s.GreenButton>
    <s.GreenButton onClick={(e) => {
      e.preventDefault();
      MintBUSD();
    }}>
      Mint With BUSD
    </s.GreenButton>
</s.MintButtonWrapper>

    </s.ConnectBox>
      </>
    )}


    <s.IMGDiamond src='/assets/dm.png'/>
    </s.Container>
    </>
  )
}

export default Connect