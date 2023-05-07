import React, { FC } from 'react';

import styles from './Banner.module.scss';

import bannerPie from '@/assets/images/banner-pie.png';

const Banner: FC = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.content}>
				<p className={styles.tilte}>BMI (Body Mass Index)</p>
				<p className={styles.subtitle}>You have a normal weight</p>
				<button className={styles.button}>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.msdmanuals.com/medical-calculators/BodyMassIndex-ru.htm'
					>
						View More
					</a>
				</button>
			</div>
			<img src={bannerPie} alt='banner pie' />
		</div>
	);
};

export default Banner;
