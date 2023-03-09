import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid grey',
  boxShadow: 24,
  overflow: 'hidden',
  borderRadius: "1em",
  p: 4,
};

function NFTDetailModal(props){
    function shortenAddress(address,prefix,suffix){
      let start=address.slice(0,2+prefix)
      let end=address.slice(42-suffix,42)
      return start+"..."+end;
    }
    function shortenText(text,length){
      if(text<=length){
        return text;
      }
      else{
        return text.slice(0,length-4)+"...";
      }
    }
    console.log(props);
    let metadata=props.nftdata.metadata;
    return(
      <Modal open={true}>
        <Box sx={style}>
          <IconButton className='absolute top-4 left-4'>
            <CloseIcon></CloseIcon>
          </IconButton>
          <Typography variant="h4">
            {metadata.name}
          </Typography>
          <Typography variant="h6" color="primary">
            {props.nftdata.name}
          </Typography>
          <Typography>
            Ticker: {props.nftdata.symbol}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Description: {
            metadata.description?
             shortenText(metadata.description,280):
             "None"}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Token Contract:&nbsp;
            <a href={`https://etherscan.io/token/${props.nftdata.token_address}`} className="underline">
              {shortenAddress(props.nftdata.token_address,8,8)}
            </a>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Token ID: {props.nftdata.token_id}
          </Typography>

        </Box>
      </Modal>
    );
}
export default NFTDetailModal;