import PlaySongs from '.';

describe('PlaySongs', () => {
    let component;
    let fakePlay = [
        { "id": 1, "firstName": "Mickey", "lastName": "Mouse" },
        { "id": 2, "firstName": "Minnie", "lastName": "Mouse" }
    ]

    beforeEach(() => {
        fetch.resetMocks()
        fetch.mockResponseOnce(JSON.stringify(fakePlay))
        component = shallow(<PlaySongs />)
    })

    it('fetches instructors and adds them to state.allInstructors', () => {
        expect(component.state('allSongs').length).toBe(2)
    })

});