import { ProfileSection, Description, Stacks } from './styles';
import StackIconSelector from 'shared/components/StackIconSelector';

interface IStack {
  name: string;
}

interface IRequest {
  stacks: IStack[];
  children: any;
}

const Profile = ({ stacks, children }: IRequest) => {
  console.log('stacks..:', stacks);
  return (
    <ProfileSection>
      <div className="about">
        <Description>{children}</Description>
      </div>
      {stacks && (
        <>
          <h2>Principais Stacks:</h2>
          <Stacks>
            {stacks.map((stack, index) => {
              return (
                <li key={index}>
                  <StackIconSelector name={stack.name} />
                </li>
              );
            })}
          </Stacks>
        </>
      )}
    </ProfileSection>
  );
};

export default Profile;
