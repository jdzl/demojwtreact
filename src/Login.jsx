import React from 'react'
import { login } from './API/Index'

class lg extends React.Component {


     auth = () => {
        login("admin", "123456").then(x => {      
          this.props.history.push('/init')    
        }).catch( console.log)
      }
    render (){
    return    <div class="ui container" style={{ display: 'grid', justifyContent: 'center',height: '100vh'}}>
            <div class="ui middle aligned center aligned grid" style={{width: 500}}>
                <div class="column">
                    <h2 class="ui teal image header">
                      
                            <div class="content">
                                testing
      </div>
    </h2>
                        <form class="ui large form">
                            <div class="ui stacked segment">
                                <div class="field">
                                    <div class="ui left icon input">
                                        <i class="user icon"></i>
                                        <input type="text" name="email" placeholder="E-mail address"/>
                                  </div>
                                    </div>
                                    <div class="field">
                                        <div class="ui left icon input">
                                            <i class="lock icon"></i>
                                            <input type="password" name="password" placeholder="Password"/>
                                  </div>
                                        </div>
                                        <div class="ui fluid large teal submit button" onClick={this.auth}>Login</div>
                                    </div>

                                    <div class="ui error message"></div>

                         </form>

                                <div class="ui message">
                                    New to us? <a href="#">Sign Up</a>
                                </div>
                            </div>
                        </div> 
                     </div>
                    
                }
            }
                
                export default lg
                
