import React, { useState, useRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Overlay, Button } from 'react-bootstrap';
const Notification = props => {
	const Row = ({ index, style }) => <div style={style}>Row {index}</div>;
	const [show, setShow] = useState(false);
	const target = useRef(null);

	return (
		<>
			<Button
				ref={target}
				style={{ backgroundColor: 'white', color: 'black', border: 'none', paddingBottom: '0px' }}
				onClick={() => setShow(!show)}
			>
				Notification
			</Button>
			<Overlay target={target.current} show={show} placement="down">
				{({ placement, scheduleUpdate, arrowProps, outOfBoundaries, show: _show, ...props }) => (
					<div
						{...props}
						style={{
							backgroundColor: 'rgba(0, 0, 0,0.2)',
							padding: '2px 10px',
							color: 'black',
							border: 1,
							borderRadius: 3,
							...props.style,
                            margin:20,
						}}
					>
						<List height={350} style={{}} itemCount={1000} itemSize={35} width={300}>
							{Row}
						</List>
					</div>
				)}
			</Overlay>
		</>
	);
};
export default Notification;
