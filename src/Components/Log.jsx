import { useDataContext } from "../Context/DataContext";

function Log({ log }) {
  const { posts } = useDataContext();

  const logText = () => {
    const postSelected = posts.find((p) => p.id === log.postId);
    let logItem = "";
    if (log.logText === "new") {
      logItem = `New Post was created : '${postSelected.title}' `;
    } else if (log.logText === "update") {
      logItem = `Post was updated : '${postSelected.title}'`;
    } else {
      logItem = `Comment added for post '${postSelected.title}'`;
    }
    return logItem;
  };

  const timeSince = () => {
    var seconds = Math.floor((new Date() - new Date(log.loggedAt)) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " year";
        } else {
            return Math.floor(interval) + " years";
        }
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " month";
        } else {
            return Math.floor(interval) + " months";
        }
    }
    interval = seconds / 86400;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " day";
        } else {
            return Math.floor(interval) + " days";
        }
    }
    interval = seconds / 3600;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " hour";
        } else {
            return Math.floor(interval) + " hours";
        }
      
    }
    interval = seconds / 60;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " minute";
        } else {
            return Math.floor(interval) + " minutes";
        }
    }
    return Math.floor(seconds) + " seconds";

  };

  

  return (
    <div className="logs-container">
        <small>{timeSince()} ago</small>
      <h4>{posts && logText()}</h4>
      <p>At {log.loggedAt}</p>
      
    </div>
  );
}

export default Log;
