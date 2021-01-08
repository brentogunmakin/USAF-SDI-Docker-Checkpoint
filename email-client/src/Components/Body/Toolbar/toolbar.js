import './toolbar.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InboxIcon from '@material-ui/icons/Inbox';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'




const Toolbar = () => {
    return(
        <div id='ToolBar'>
        <IconButton>
        <AddCircleOutlineIcon color="white" fontSize="large" />
        </IconButton>

        <IconButton>
        <InboxIcon color="white" fontSize="large"/>
        </IconButton>
        
        <IconButton>
        <PriorityHighIcon color="white" fontSize="large"/>
        </IconButton>

        <IconButton>
        <DeleteIcon color="white" fontSize="large"/>
        </IconButton>

        </div>
    )
}

export default Toolbar;