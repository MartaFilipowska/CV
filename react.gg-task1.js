function Avatar({altTag, source}) {
  return <img src={source} alt={altTag} />;
}

function Name({name}) {
  return <h4>{name}</h4>;
}

function Handle({handleText}) {
  return <p>@{handleText}</p>;
}

function Badge({user, addFriend, style}) {
  return (
    <div style={style}>
      <Avatar altTag={user.name} source={user.img} />
      <div>
        <Name name={user.name} />
        <Handle handleText={user.handle} />
        <button onClick={addFriend}>Add Friend</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={{
        name: "Lynn Fisher",
        img: "https://avatars.githubusercontent.com/u/871315",
        handle: "lynnandtonic"
      }}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--beige-10)",
        borderRadius: 8,
        backgroundColor: "var(--charcoal)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center"
      }}
      addFriend={() => alert("Added!")}
    />
  );
}
