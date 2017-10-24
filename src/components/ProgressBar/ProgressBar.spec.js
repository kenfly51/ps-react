import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar';

// TODO: need to place those lines wherelse
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

describe('', () => {
  test('getWidthAsPercentOfTotalWidth should return 50 if the percent is 50 out of the width of 100', () =>{
    const wrapper = shallow(<ProgressBar percent={50} width={100}/>);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();

    expect(width).toEqual(50);
  });
});