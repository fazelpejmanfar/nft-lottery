
import * as s from '../styles/styles'
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import toast, { Toaster } from 'react-hot-toast';
import ABI from '../components/abi.json'

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


function Claim() {

  const ContractAddress = '0x7777902e3926f195DBC1392876B2cF1C468a7777';
  const [Address, setAddress] = useState(null);
  const [NContract, setNContract] = useState(null);
  const [Tokens, setTokens] = useState([]);


  const Connect = async() => {
    try {
        const web3Modal = new Web3Modal({
            cacheProvider: true,
          providerOptions // required
        });
        
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const accounts = await provider.listAccounts();
      const NFTCT = new ethers.Contract(ContractAddress, ABI, signer);
      setNContract(NFTCT);
      setAddress(accounts[0]);
      const opt = {
        headers: {
             accept: 'application/json',
            'X-API-Key': 'Cc4UW5VokbK7x1u1JuzPKzennbe85QlUYG6lYbCywBAxnSimQbIrt8LzGbkbpKpK'
        }};
        fetch(`https://deep-index.moralis.io/api/v2/${accounts[0]}/nft/${ContractAddress}?chain=bsc&format=decimal`, opt)
        .then(response => response.json())
        .then((data) => {
          console.log(data.result);
          setTokens(data.result);
        });
    } catch (err) {
      toast.error(`${err}`);
      console.log(err)
    }
  };

  const Claim = async(ID) => {
    toast.loading("Claiming...");
try {
const Claim = await NContract.claimPrize(ID, {
from: Address,
gasLimit: 285000
});
const TX = await Claim.wait().then('result', (rec) => {
console.log(rec);
toast.success("Claim was Successfull..");
}); 
} catch (err) {
toast.dismiss();
toast.error(String(err).substring(0,33));
console.log(err);
}
  };

  const ClaimAll = async() => {
    toast.loading("Claiming All...");
try {
const Claim = await NContract.claimAllPrizes({
from: Address,
gasLimit: 285000
});
const TX = await Claim.wait().then('result', (rec) => {
console.log(rec);
toast.success("Claim was Successfull..");
}); 
} catch (err) {
toast.dismiss();
toast.error(String(err).substring(0,33));
console.log(err);
}
};

useEffect(() => {
    if(!Address) {
        Connect();
    }
  });

    return (
        <s.Main>
        <Toaster />
        <br></br>
        <s.ClaimWrapper>
    <s.ClaimButton onClick={(e) => {
        e.preventDefault();
        ClaimAll();
    }}>
      Claim All
    </s.ClaimButton>
    </s.ClaimWrapper>
    <br></br>
      <s.ClaimBox>
      {Tokens.length > 0 ? Tokens.map((ID, index) => {
        return (
            <s.IDWrapper key={index}>
        <s.IDS>
        <s.Text>
        ID
      </s.Text>
      <s.HText>
        {ID.token_id}
      </s.HText>
      <s.ClaimButtonC onClick={(e) => {
        e.preventDefault();
        Claim(ID.token_id);
      }}>
        Claim
      </s.ClaimButtonC>
      </s.IDS>
      <s.HR></s.HR>
        </s.IDWrapper>
        )
      }) : (
        <>
            <s.Text>
                No Tokens Found...
            </s.Text>
        </>
      )}
    </s.ClaimBox>
       </s.Main>
    );
}

export default Claim;