import React, { SVGProps } from 'react';

const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11.979 18.8C11.8 20.04 10.535 21 9 21c-1.657 0-3-1.12-3-2.5S7.343 16 9 16c.35 0 .687.05 1 .142V5.932c0-.513.32-.966.79-1.12l5.75-1.758c.724-.236 1.46.328 1.46 1.12v1.758c0 .586-.549.96-1 1.068-.65.155-2.316.488-5 1v10.551c0 .09-.007.173-.021.25z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMusicNote;
