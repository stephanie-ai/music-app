import LikeButton from '.';

describe('LikeButton', () => {
    let component;

    beforeEach( () => {
        component = shallow(<LikeButton />)
    })

    test('renders a span with a (✓) in it', () => {
        let tickspan = component.find('span')
        expect(tickspan.text()).toContain('✓')
    })

    test('shows a grey tick if the song is not liked', () => {
        component.setState({ liked: false })
        let tickspan = component.find('span')
        expect(tickspan.prop('style')).toHaveProperty('color', 'grey')
    })

    test('shows a green tick if the song is liked', () => {

    })

    test('toggles liked state when clicked', () => {

    })

})