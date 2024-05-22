import WelComeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <WelComeMessage
        isLoggedIn={true}
        user={{
          email: "somnathbedia7@gmail.com",
          role: "user",
        }}
      />
    </>
  );
}

export default App;
