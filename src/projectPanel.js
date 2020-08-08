import React from 'react';
import Card from 'react-bootstrap/Card'

class ProjectPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: props.project.icon,
            name: props.project.name,
            pos: props.project.pos,
            desc: props.project.description
        };
        console.log(props);
    }

    render() {
        if (this.state.pos === 0) {
            return(
                <div className="panelParent">
                    <div>
                        <img src={process.env.PUBLIC_URL + this.state.icon} />
                    </div>
                    <div className="panelText" style={{ 'margin-right': '50px'}}>
                        <div><h1>{this.state.name}</h1></div>
                        <div>{this.state.desc}</div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="panelParent">
                    <div className="panelText" style={{ 'margin-left': '50px'}}>
                        <div><h1>{this.state.name}</h1></div>
                        <div>{this.state.desc}</div>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + this.state.icon} />
                    </div>
                </div>
            );
        }
    }
}

export default ProjectPanel;