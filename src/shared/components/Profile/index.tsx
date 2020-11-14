import { ProfileSection, Description, Stacks } from './styles';
import StackIconSelector from 'shared/components/StackIconSelector';
import Stack from 'models/enums/Stack';

interface IRequest {
  stacks: Stack[];
  children: any;
}

const Profile = ({ stacks, children }: IRequest) => {
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
                  <StackIconSelector name={stack} />
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
