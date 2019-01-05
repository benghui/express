const React = require("react");
const DefaultLayout = require("./layout/defaultlayout");

class Home extends React.Component {
    render() {
        
        return (
            <DefaultLayout>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-sm-1">
                            <a href="/login" className="btn btn-dark" role = "button">Login</a>                    
                        </div>
                        <div className="col-sm-1">                
                            <a href="/register" className="btn btn-dark" role = "button">Register</a>
                        </div> 
                    </div>       
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Home;