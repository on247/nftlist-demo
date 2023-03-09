import NFTListItem from "./NFTListItem";
function NFTList(props) {
  let items=[]
  for(let item of props.nfts){
     items.push(<NFTListItem nftdata={item} key={item.token_hash} onNFTSelect={props.onNFTSelect}/>)
  }
  return (
    <div className="NFTList flex flex-row flex-wrap justify-between content-start">
      {items}
    </div>
  );
}
export default NFTList;
