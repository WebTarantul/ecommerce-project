import React from 'react';
import Avatar from '../Avatar/Avatar';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';

const ViewerAvatar = ({ children, ...props }) => {
  const { viewer } = useStore();
  return (
    <Avatar user={viewer.user} {...props}>
      {children}
    </Avatar>
  );
};

export default observer(ViewerAvatar);
