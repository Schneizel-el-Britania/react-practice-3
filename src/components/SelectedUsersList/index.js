import React from 'react';

const SelectedUsersList = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  return (
    <div>
      {selectedUsers.map(({ id, fname }) => {
        return <div key={id}>{fname}</div>
      })}
    </div>
  );
}

export default SelectedUsersList;
