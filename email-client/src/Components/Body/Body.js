import './Body.css'
import Toolbar from './Toolbar/toolbar'
import EmailList from './EmailList/emailList'
import SidePlugin from './SidePlugin/sidePlugin'

const Body = () => {
    return(
        <div id='body'>
        <Toolbar id='toolbar'/>
        <EmailList id='emaillist'/>
        <SidePlugin id='sideplugin'/>
        </div>
    )
}

export default Body;