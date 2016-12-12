import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Tweet from '../Tweet';

const tweets ={"id":808422013928935400,"text":"RT @wwf_uk: 70% of Norway’s wolf population could be hunted &amp; killed this winter. Help @WWFNorge #SaveOurWolves:… "};

describe('<Tweet />', () => {
  it('renders children', () => {
    const component = shallow(
      <Tweet data={tweets} />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
