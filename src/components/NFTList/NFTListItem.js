import { Typography } from "@mui/material";
import "./NFTListStyle.css";
function NFTListItem(props) {
  return (
    <div className="NFTListItem w-80 relative p-4 my-4 rounded-lg overflow-hidden" onClick={()=>{props.onNFTSelect(props.nftdata)}}>
      <img src={props.nftdata.metadata.image} className="rounded-lg"></img>
      <div className="mt-4">
        <Typography variant="body1" className="mt-4 mb-1">
          {props.nftdata.metadata.name}
        </Typography>
      </div>
      <Typography variant="body1" color="primary">
        {props.nftdata.name}
      </Typography>
    </div>
  );
}
export default NFTListItem;
