import { FC } from "react";

type WelComeMessageProp = {
  isLoggedIn: boolean;
  user?: {
    email: string;
    role: "admin" | "user" | "moderator";
  };
};

const WelComeMessage: FC<WelComeMessageProp> = ({ isLoggedIn, user }) => {

    if(user?.role === "user"){
        return <div><p>You don't have access to visit</p></div>
    }

    return <div>
        {isLoggedIn ? <h1>Logged in</h1> : <h1>Logged out</h1>}
        {user && <p>Welcome { user.email}</p>}
    </div>;
};

export default WelComeMessage;
