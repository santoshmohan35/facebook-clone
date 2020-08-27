import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

function sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={'https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/117889685_3021676321263006_871926712786588741_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=m8ykrkm74KoAX9nITUb&_nc_ht=scontent.fblr8-1.fna&oh=98a155ddf2b786fb698b9af0d1c40826&oe=5F6E0C29'} title={'Santosh Mohan'} />
            <SidebarRow  Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
            <SidebarRow  Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow  Icon={PeopleIcon} title="Friends"/>
            <SidebarRow  Icon={ChatIcon} title="Messenger"/>
            <SidebarRow  Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow  Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow  Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default sidebar
