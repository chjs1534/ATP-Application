import React from 'react';
import NavBar from './NavBar';
import Search from './Search';

interface HomeProps {
  	setPlayerId: React.Dispatch<React.SetStateAction<number>>; 
}

export default function Home({ setPlayerId } : HomeProps) {
	return (
		<div>
		<NavBar />
		<div className="flex justify-center">
			<h3 className='text-main-secondary absolute top-[160px] left-[24px] md:top-[208px] md:left-[180px]'>
			Access ATP stats with ease
			</h3>
			<h1 className="text-main-primary absolute top-[398px] ">
			ATP.ST
			</h1>
			<Search sizeStyles="top-[520px]" setPlayerId={setPlayerId}/>
		</div>
		</div>
	);
}
