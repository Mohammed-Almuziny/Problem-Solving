const whosOnline = (friends) => {
  let result = {
    online: [],
    offline: [],
    away: [],
  };

  friends.forEach((friend) => {
    if (friend.status === "offline") {
      result.offline.push(friend.username);
    } else if (friend.status === "online") {
      if (friend.lastActivity > 10) {
        result.away.push(friend.username);
      } else {
        result.online.push(friend.username);
      }
    }
  });

  if (result.online.length == 0) delete result.online;
  if (result.offline == 0) delete result.offline;
  if (result.away == 0) delete result.away;

  return result;
};
