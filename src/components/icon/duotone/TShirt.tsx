import React, { SVGProps } from 'react';

const SvgTShirt = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.835 4C8.229 5.212 9.944 6.125 12 6.125S15.771 5.212 16.165 4h1.107a.999.999 0 01.22 0h.008c.301 0 .571.133.755.344l4.335 2.503a1 1 0 01.366 1.366L21.3 11.082a1 1 0 01-1.366.366L18.5 10.62V20a1 1 0 01-1 1h-11a1 1 0 01-1-1v-9.38l-1.433.828a1 1 0 01-1.366-.366l-1.656-2.87a1 1 0 01.366-1.365l4.333-2.502A.998.998 0 016.5 4h.01a.999.999 0 01.219 0h1.106z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgTShirt;
