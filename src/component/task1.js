import React from 'react'

class Task1 extends React.Component{
  constructor() {
    super();
    this.state = {
      wordCount: 0,
    };
  } 
    subValidate = () => {
      const text = document.getElementById('msg').value;
      const words = text.split(/\s+/).filter(word => word !== '');
      this.setState({ wordCount: words.length });
    };
    render() { 
  
        return (<>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n        #container{\n            border: 1px solid black;\n            width: 600px;\n            height: 350px;\n            margin: 40px 0px 0px 400px; \n        }\n        #head{\n            font-size: 28px;\n            font-weight: bold;\n            text-align: center;\n        }\n        #msg{\n            margin: 40px 0px 0px 50px;\n        }\n        #word{\n            margin: 0px 0px 0px 50px;\n        }\n\n    "
              }}
            />
            <div id="container">
              <div id="head">Responsive Paragraph Word Counter</div>
              <textarea
                name="message"
                id="msg"
                cols={54}
                rows={8}
                onChange={this.subValidate}
            defaultValue={''}
              />
              <br />
              <br />
              <span id="word">Word count: {this.state.wordCount}</span>
            </div>
          </>
          );
            
    }
}
 
export default Task1;

