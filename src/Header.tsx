import * as React from 'react';
import photo from "./images/Photo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)

class Header extends React.Component<any,any> {

  constructor(props: any) { 
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (link: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(link, "_href")
  }

  public render() {
    return (
      <div className="col-md-8 mx-auto">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center"> <strong> Michael Tristin Lee </strong> </h1>
                <h3 className="text-center"> <strong> Software Engineer, Sage Bionetworks </strong> </h3>
                <p className="text-center"> <i> B.S, Computer Science, University of Washington, 2014 - 2018 </i> </p>
                <div className="row">
                  <div className="col-md-4">
                    <img className="customImg" src={photo} alt="Photo of headshot"></img>
                  </div>
                  <div className="col-md-8">
                    <p className="mediumText"> I'm a software engineer with a desire to make products that have impact. This has so far led me in the direction of biomedical software tools. </p>
                    <p className="mediumText">
                      As an engineer I'm always learning a new technology. 
                      The ambiguity and uncertainty that comes with learning is a welcome feeling and something that I strive
                      to curtail faster and faster as I progress through my career. </p>
                    <p className="mediumText"> As a human, I'm an avid tennis player, an animal lover, and sometimes a half-orc barbarian (chaotic good if you must ask). </p>
                    <button onClick={this.handleClick("https://www.linkedin.com/in/michael-tristin-lee/")} className="btn btn-primary mr-3" type="button">  Contact </button>
                    <button onClick={this.handleClick("https://github.com/leem42")} className="btn btn-dark" type="button"> <FontAwesomeIcon icon={faGithub}/> Github </button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
  
}

export {Header};