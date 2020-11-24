import LikeCount from '.';

describe('LikeCount', () => {
    let component;
  
    beforeEach(() => {
      component = shallow(<LikeCount />);
    });
  
    test("increases like count when 'I\'ve read!' button is clicked", () => {
      const likeButton = component.find('button');
      const initialLikeCount = component.state('likeCount');
      likeButton.simulate('click');
      expect(component.state('likeCount')).toBe(initialLikeCount + 1)
    })
  });