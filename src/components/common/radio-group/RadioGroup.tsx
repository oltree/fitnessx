import cn from 'classnames';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './RadioGroup.module.scss';

import { exercisesNames } from '@/utils/constants/exercises';

interface RadioGroupProps {
	register: UseFormRegisterReturn<string>;
	className?: string;
}

const RadioGroup: FC<RadioGroupProps> = ({ register, className }) => (
	<fieldset id='exercise' className={cn(styles.radioGroup, className)}>
		{exercisesNames.map(exercise => (
			<div key={exercise.name}>
				<input
					id={exercise.name}
					type='radio'
					{...register}
					value={JSON.stringify(exercise)}
				/>
				<label htmlFor={exercise.name}>
					<img src={exercise.icon} alt={exercise.name} />
				</label>
			</div>
		))}
	</fieldset>
);

export default RadioGroup;
