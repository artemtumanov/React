import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from "react-router-dom";
import React from 'react';

const ChatListItem = (props) => {
  const { icon, chat } = props;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={'chats/' + chat.id} ref={ref} {...itemProps} role={undefined} />;
      }),
    [chat],
  );
  return (
    <li>
      <ListItem button
        component={renderLink}
        secondaryAction={
          <IconButton edge="end" value={chat.id} aria-label="delete" onClick={props.delButton}>
            <DeleteIcon />
          </IconButton>
        }
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={chat.name} />
      </ListItem>
    </li>
  );

}
export default ChatListItem;