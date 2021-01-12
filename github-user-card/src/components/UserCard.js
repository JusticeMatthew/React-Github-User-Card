import React from 'react';
import styled from 'styled-components';

const UserCard = ({ userData, userFollowers }) => {
  return (
    <StyledUserCard>
      <h2>{userData.login}</h2>
      <img src={userData.avatar_url} alt='' width='150px'></img>
      <section>
        <h3>Name: {userData.name}</h3>
        <h3>Location: {userData.location}</h3>
        <h3>Followers:</h3>
        {userFollowers.map((follower) => (
          <h5 key={follower.id}>
            <a href={follower.url}>{follower.login}</a>
          </h5>
        ))}
      </section>
    </StyledUserCard>
  );
};

export default UserCard;

const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  width: 20%;
`;
