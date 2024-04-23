"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ProfileIcon from "@mui/icons-material/Person"
import SettingIcon from "@mui/icons-material/Settings"
import LogoutIcon from "@mui/icons-material/Login"
import ModalWindow from './ModalWindow';
import Logout from '@/components/navigation/Logout';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <ProfileIcon />, name: 'Profile' },
  { icon: <SettingIcon />, name: 'Settings' },
  { icon: <LogoutIcon />, name: 'Logout' },
];

export default function PopupProfile() {
  const [direction, setDirection] = React.useState('down');
  const [hidden, setHidden] = React.useState(false);
  const [modal, setModal] = React.useState({
    open: false,
    actions: ""
  })

  const handleClose = () => {
    setModal({
      open: false,
    })
  }


  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleAction = (action) => {
    console.log(action);
    setModal({
      open: true,
      actions: action.name
    })
  }

  return (
    <>
      <ModalWindow open={modal.open} handleClose={handleClose} handleAction={handleAction}>
        {
          modal.actions === "Profile" ? <p>Profile</p> : modal.actions === "Settings" ? <p>Settings</p> : <Logout close={handleClose}/>
        }
      </ModalWindow>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Box sx={{ position: 'fixed', mt: -5, height: 100, top: -80, right: "30px" }}>
          <StyledSpeedDial
            ariaLabel="SpeedDial playground example"
            hidden={hidden}
            icon={<SpeedDialIcon />}
            direction={direction}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => handleAction(action)}
              />
            ))}
          </StyledSpeedDial>
        </Box>
      </Box>
    </>
  );
}