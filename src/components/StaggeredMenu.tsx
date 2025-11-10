import React from 'react';
import StaggeredMenuClient, {
  StaggeredMenuProps as ClientProps,
  StaggeredMenuItem,
  StaggeredMenuSocialItem
} from './StaggeredMenu.client';

export interface StaggeredMenuProps extends ClientProps {
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

const StaggeredMenu: React.FC<StaggeredMenuProps> = ({ onMenuOpen, onMenuClose, ...rest }) => {
  return <StaggeredMenuClient {...rest} />;
};

export type { StaggeredMenuItem, StaggeredMenuSocialItem };

export default StaggeredMenu;
