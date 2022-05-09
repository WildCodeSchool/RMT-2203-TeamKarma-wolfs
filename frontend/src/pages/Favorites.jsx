import "../styles/main.css";

export default function Favorites({ loggedIn }) {
  return (
    <section>
      {loggedIn === false ? (
        <div className="favNoLogin">
          <p>You need to be logged in to access this page</p>
        </div>
      ) : (
        <div className="favLogin">
          <p>Sorry, this section is coming soon !</p>
        </div>
      )}
    </section>
  );
}
