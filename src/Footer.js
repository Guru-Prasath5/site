import React from 'react';
import './Footer.css';

export default class Footer extends React.Component{

    constructor(props){
        super(props);
        
        let today = new Date();
        this.state={
            currentYear : today.getFullYear(),
        }

    }

    render(){
        return(
            
            <div className="Footer" >
            
            <i className="footerText">
            &copy;<span>{this.state.currentYear}</span> checkout my github for details.
            </i>
            
            <section id="lab_social_icon_footer">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container">
        <div className="text-center center-block">
                <a href="https://www.facebook.com/guru.prasath.7771"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/guru_r_guru"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="mailto:guruprasathrajappan@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                <a href="https://github.com/Guru-Prasath5"><i id="social-git" className="fa fa-github-square fa-3x social"></i></a>
                <a href="https://www.linkedin.com/in/guru-prasath-a6573999"><i id="social-linkedin" className="fa fa-linkedin fa-3x social"></i></a>
    </div>
</div>
            <p className="footerCreatedBy">
                <span className="createdByC">C</span>reated by : <i className="createdByG">mySelf</i>😉

            </p>
            </section>
            
            </div>
        )
    }
}