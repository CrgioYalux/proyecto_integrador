import './SidePanel.css';

import { useState } from 'react';
import { useAdminSystem } from '../../../providers/AdminSystem';

import Button from "../../../components/Button";
import SwitchThemeBT from "../../../components/SwitchThemeBT";
import HamburgerMenu from '../../../components/Icons/HamburgerMenu';

import logoImgUrl from '../../../assets/TrendStyle.png';

interface SidePanelProps {
    className?: string;
};

const SidePanel: React.FC<SidePanelProps> = ({  }) => {
    const [sidePanelVisibility, setSidePanelVisibility] = useState<boolean>(false);
    const [state, actions] = useAdminSystem();

    const sessionInfoText: string = state.userSession.logged
        ? `Logged as ${state.userSession.loginInfo?.username}`
        : 'Not logged';

    return (
        <label className='SidePanel_label' htmlFor='SidePanel'>
            <input 
            id='SidePanel'
            type='checkbox'
            checked={sidePanelVisibility}
            onChange={() => setSidePanelVisibility(prev => !prev)}
            />
            <HamburgerMenu className='SidePanel_label_icon' />
            <div className='SidePanel'>
                <div className='SidePanel_session_info'>
                    <div className='SidePanel_logo'>
                        <img src={logoImgUrl} />
                    </div>
                    <span>{sessionInfoText}</span>
                </div>
                <div className='SidePanel_options'>
                    <SwitchThemeBT className='SidePanel_options_bt' />
                    <Button className='SidePanel_options_bt SidePanel_options_lang_bt'>ES</Button>
                    {state.userSession.logged && <Button className='SidePanel_options_bt SidePanel_options_logout_bt' onClick={() => actions.userSession.logOut()}>Log out</Button>}
                </div>
            </div>
        </label>
    );
};

export default SidePanel;
