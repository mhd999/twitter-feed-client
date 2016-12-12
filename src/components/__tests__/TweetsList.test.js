import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TweetsList from '../TweetsList';

const tweets =[{"created_at":"Mon Dec 12 21:23:22 +0000 2016","id":808422013928935400,"text":"RT @wwf_uk: 70% of Norway’s wolf population could be hunted &amp; killed this winter. Help @WWFNorge #SaveOurWolves:… "}]

describe('<TweetsList />', () => {
  it('renders children', () => {
    const component = shallow(
      <TweetsList tweets={tweets} />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
