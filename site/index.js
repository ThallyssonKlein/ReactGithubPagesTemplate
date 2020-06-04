import React from 'react';
import ReactDOM from 'react-dom';

import BorderLayout from '@thallyssonklein/border-layout';

class App extends React.Component{
    render(){
        return(
            <>
                <BorderLayout style={{backgroundColor: "#22222C"}}>
                    {{
                        center: <div style={{display: "flex", flexDirection: "column"}}>
                            <h1 style={{color: "white", textAlign: "center"}}>Brainstorming....</h1>
                            <img src="https://i.ya-webdesign.com/images/transparent-gear-gif-animation-14.gif" style={{textAlign: "center", verticalAlign: "middle"}}/>
                        </div>
                    }}
                </BorderLayout>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))


