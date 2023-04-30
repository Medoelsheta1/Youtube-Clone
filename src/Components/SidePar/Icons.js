
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FeedIcon from '@mui/icons-material/Feed';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SchoolIcon from '@mui/icons-material/School';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const Categories = {
    MainCategory: 
    [
    { name: 'Home' , icon: <HomeIcon />} ,
    { name: 'Trending' , icon: <WhatshotIcon />},
    { name: 'Films' , icon: <TheatersIcon />},
    { name: 'Music' , icon: <MusicNoteIcon />},
    { name: 'Live' , icon: <LiveTvIcon />},
    { name: 'Game' , icon: <SportsBaseballIcon />},
    { name: 'News' , icon: <FeedIcon />},
    { name: 'Sports' , icon: <SportsEsportsIcon />},
    { name: 'Learning' , icon: <SchoolIcon />},
    { name: 'Fashion' , icon: <CheckroomIcon />},
    ],
    altCategory: [
        { name: 'TEDx' , icon: <SettingsIcon />},
        { name: 'MrBeast' , icon: <ReportIcon />},
        { name: 'WWE' , icon: <HelpIcon />},
        { name: 'Red Settings' , icon: <FeedbackIcon />},
    ] ,
}
