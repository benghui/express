var React = require("react");
const DefaultLayout = require("./layout/defaultlayout");

class Home extends React.Component {
    render() {
        
        return (
            <DefaultLayout>
                <div>Hi</div>
            </DefaultLayout>
        )
    }
}

module.exports = Home;