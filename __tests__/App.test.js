import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({
	adapter: new Adapter()
});
import Gui, {
	GuiString,
	GuiColor,
	GuiBool,
	GuiButton,
	GuiNumber,
	GuiEasing,
	GuiSelect
} from '../src/lib/index';

let data = {
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
	<Gui data={data} onUpdate={update}>
		<GuiNumber path="div" label="Divisions" min={2} max={40} step={1} />
	</Gui>
);

describe('<Gui/>', () => {
	it('renders the Gui', () => {
		wrapper;
	});
});

describe('<Gui/> Snapshot', () => {
	it('creates a snapshot', () => {
		wrapper;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
