import React, { SVGProps } from 'react';

const SvgForkSpoon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15 3l.45 4.502a.552.552 0 001.1 0L17 3h1l.45 4.502a.552.552 0 001.1 0L20 3h1v4.5a3.5 3.5 0 01-7 0V3h1z'
					fill='currentColor'
				/>
				<path
					d='M17.5 13c.561 0 1.024.438 1.055.998l.362 6.504A1.419 1.419 0 0117.5 22a1.419 1.419 0 01-1.417-1.498l.362-6.504c.03-.56.494-.998 1.055-.998zM7.5 14c.562 0 1.027.437 1.062.998l.344 5.505A1.41 1.41 0 017.5 22a1.41 1.41 0 01-1.406-1.497l.344-5.505c.035-.561.5-.998 1.062-.998z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7.5 12C5.567 12 4 9.433 4 7.5 4 5.567 5.567 3 7.5 3S11 5.567 11 7.5C11 9.433 9.433 12 7.5 12zm.01-7.399l.05 5.347a2.097 2.097 0 001.917-2.053c.02-1.134-.844-3.19-1.967-3.294z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgForkSpoon;
