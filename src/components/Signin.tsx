import { Component } from "react";

class Signin extends Component{

    state = {
        email: "",
        password:""
    }

    handleSubmit(e:React.SyntheticEvent) {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render(): React.ReactNode {
        return <form className="flex flex-col w-64 gap-3 justify-center items-center" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Email" onChange={(e) => {
                this.setState({
                    email:e.target.value
                })
            }} />
            <input type="password" placeholder="Password" onChange={(e) => {
                this.setState({
                    password:e.target.value
                })
            }} />
            <button>Login</button>
        </form>
    }
}

export default Signin;