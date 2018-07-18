import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GuiString } from '../src/lib';

configure({
	adapter: new Adapter()
});

let data = {
	text: 'Some Awesome Value',
	div: 10,
	mirror: true,
	rainbow: false,
	background: '#f9f7f7',
	color: {
		r: 96,
		g: 239,
		b: 184
	}
};
const update = dat => {
	data = dat;
};

const wrapper = shallow(
	<GuiString
		key={1}
		num={1}
		theme="dark"
		path="text"
		label="Input"
		data={data}
		updateData={update()}
	/>
);

describe('<GuiString>', () => {
	it('checks string state', () => {
		expect(wrapper.state().val).toEqual('Some Awesome Value');
	});
});
