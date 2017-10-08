jest.unmock('../Avatar');
import React from 'react';
import Avatar from '../Avatar';
import renderer from 'react-test-renderer';

describe('the avatar component', () => {
    const props = {
        id: 2,
        user: 'dfederspiel',
        alt: 'photo of '
    };

    it('renders correctly', () => {
        const tree = renderer.create(
            <Avatar
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('given a user name', () => {
        it('should display the users avatar', () => {

            const tree = renderer.create(
                <Avatar
                    {...props}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});