import { SampleOneComponent } from './sample-one.component';

describe('SampleOneComponent', () => {
  // Arrange
  let component:SampleOneComponent;

  beforeEach(()=>{
    component = new SampleOneComponent();
  });
  
  it('Should increment votes when upvoted',()=>{
    // Act
    component.upVote()
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('Should increment votes when down voted',()=>{
    // Act
    component.downVote()
    // Assert
    expect(component.totalVotes).toBe(-1);
  })
});
