import { useEffect, useState } from  'react'
import { useAccount } from 'wagmi'
import Typography from "@mui/material/Typography";
import NFTList from "../components/NFTList";
import axios from "axios";
import NFTDetailModal from '../components/NFTDetailModal';

const API_KEY="8mwBDqnR1TMz1lVPGLe2tpTCtvdKVviS7oWmrJ2fUzEuvilBdfhmpaarWFulwsnA";
const IPFS_GATEWAY="https://cloudflare-ipfs.com/ipfs/";

let NFTAccountView = () => {
  const { address , isConnected } = useAccount();
  const [accountNFTs , setAccountNFTs] = useState([]);
  const [selectedNft , setSelectedNFT] = useState(null);
  let onNFTSelect=(data)=>{
    setSelectedNFT(data)
  }
  let fetchNFTs=async()=>{
    if(isConnected){
      let url=`https://deep-index.moralis.io/api/v2/${address}/nft`
      let config={
        headers:{
            "X-API-Key":API_KEY
        }
      }
      let response=await axios.get(url,config);
      if(response.data?.result){
        let data=response.data?.result;
        data=data.map(item=>{
            item.metadata=JSON.parse(item.metadata);
            if(item.metadata.image.startsWith("ipfs://")){
                let hash=item.metadata.image.slice(7);
                item.metadata.image=IPFS_GATEWAY+hash;
            }
            return item;
        })
        setAccountNFTs(data)
      }
    }
    else{
        return [];
    }
  }
  useEffect(() => {
    fetchNFTs()
  },[address,isConnected]);
  return (
    <>
      <Typography variant="h4">Your NFTs</Typography>
      {isConnected && <NFTList nfts={accountNFTs} onNFTSelect={onNFTSelect}/>}
      {isConnected && accountNFTs.length === 0 &&
        <Typography>You have no NFTs on this account.</Typography>
      }
      {!isConnected && (
        <Typography>Connect your account to see your NFTs.</Typography>
      )}
      {selectedNft && 
        <NFTDetailModal nftdata={selectedNft}></NFTDetailModal>
      }
    </>
  );
}
export default NFTAccountView;
