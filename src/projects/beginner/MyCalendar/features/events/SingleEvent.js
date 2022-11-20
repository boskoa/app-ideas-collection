const SingleEvent = ({ event }) => {
  if (!event) {
    return <div />;
  }

  return (
    <div>
      <p>
        {event.date
          .toLocaleString("sv", { timeZone: "Europe/Paris" })
          .slice(0, 15)}
      </p>
      <p>{event.title}</p>
      <p>{event.content}</p>
      {event.reminder && <p>Reminder: {event.reminder.slice(0, 10)}</p>}
    </div>
  );
};

export default SingleEvent;
