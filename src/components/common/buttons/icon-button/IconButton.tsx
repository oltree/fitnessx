import cn from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './IconButton.module.scss';

interface IconButtonProps {
  link: string;
  icon: string;
  text: string;
  className?: string;
  onClick?: VoidFunction;
}

const IconButton: FC<IconButtonProps> = ({
  link,
  icon,
  text,
  className,
  onClick
}) => (
  <NavLink to={link}>
    <button onClick={onClick} className={cn(styles.button, className)}>
      <img src={icon} alt={text} />
    </button>
  </NavLink>
);

export default memo(IconButton);
