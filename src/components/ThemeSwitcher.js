import React, { Component } from 'react';

class ThemeSwitcher extends Component {

  state = { theme: null }
  
  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';
    
    return (
      <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      
        <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'Home Page' }</span>
        
        <div className="btn-group">
        
          <button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' } Theme</button>
          
          <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Theme Dropdown</span>
          </button>
          
          <div className="dropdown-menu">
          
            <a className="dropdown-item" href="./Calculator" onClick={e => this.chooseTheme('Primary', e)}>Calculator</a>
            <a className="dropdown-item" href="./contact" onClick={e => this.chooseTheme('Danger', e)}>Contact Us!</a>
            <a class="dropdown-item" href="./resume" onClick={e => this.chooseTheme('Success', e)}>Resume</a>
            
            <div className="dropdown-divider"></div>
            
            <a className="dropdown-item" href=".landingpage" onClick={this.resetTheme}>Home Page</a>
          </div>
          
        </div>
        
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;