import * as React from 'react';

interface PropsType {
  title?: string,
  description?: string,
  projectLinks?: string,
  timeline?: string,
  githubLink?: string
}

class Project extends React.Component<PropsType, {}> {
  public render () {
    return (<div className="row"> 
              <div className="col-md-8 mx-auto">
                <h5> 
                  {this.props.title}, <a target="_href" href={this.props.githubLink}> Project Github </a>
                  <span style={{float: "right"}}> {this.props.timeline} </span>
                </h5>
                <p className="mediumText roboto">
                  {this.props.description}
                </p>
              </div>
            </div>)
  }
}

class Projects extends React.Component<any,any> {
  public render() {
    return (
      <React.Fragment>
        <Project title={"Sage Bionetworks,  Seattle WA,  Front End Development"}
                 timeline={"June 2018 - Present "}
                  description={`
                    My work is creating react components that allow for customizable views of the Synapse Platform. These views are used
                    to create community portals for scientific communities that Sage has established relationships with. In this work I interact with a 
                    UX designer, Senior Developer, and contractor to ensure that requirements are both met and established.
                  `}     
                  githubLink={"https://github.com/Sage-Bionetworks/Synapse-React-Client"}
            />
      </React.Fragment>
    )
  }

}

export {Projects}