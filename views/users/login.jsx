const React = require("react");
const DefaultLayout = require("../layout/defaultlayout");

class Register extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="jumbotron text-center jumbo login">
                    <form className="" method="POST" action="/login">
                        <input
                            className="input mt-4"
                            type="text"
                            name="username"
                            placeholder="username"
                            required
                            autoComplete="off"
                        />
                        <br />
                        <input
                            className="input mt-4"
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                        />
                        <br />
                        <br />
                        <input
                            className="btn btn-dark"
                            type="submit"
                            value="Login"
                        />
                    </form>
                    <div className="links-container mx-auto">
                        <a href="/" className="link float-left">
                            Back to home
            </a>
                        <a href="/register" className="link float-right">
                            Register An Account?
            </a>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Register;
