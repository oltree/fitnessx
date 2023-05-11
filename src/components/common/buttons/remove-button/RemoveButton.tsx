import cn from 'classnames';
import { FC, memo } from 'react';

import styles from './RemoveButton.module.scss';

interface RemoveButtonProps {
	onClick: VoidFunction;
	className?: string;
}

const RemoveButton: FC<RemoveButtonProps> = ({ onClick, className }) => (
	<button
		type='submit'
		onClick={onClick}
		className={cn(styles.button, className)}
	>
		x
	</button>
);

export default memo(RemoveButton);
