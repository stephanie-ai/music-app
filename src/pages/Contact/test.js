import Contact from '.';

describe('Contact', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Contact />);
    })

    test('it renders', () => {
        expect(component).toExist;
    })
})