import {Component} from "react";
import "./FAQ.css"
const data = {};

class FAQ extends Component {
    submitForm(e) {
      data.name = document.getElementById("name").val(e);
      data.email = document.getElementById("email").val(e);
      data.comment = document.getElementById("comment").val(e);
      var url = "http://www.someurl.com/post_comment.php";
      const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      fetch(url, reqOptions).then(function (response) {
        document.getElementById("comments").append(response);
      });
      e.preventDefault();
  
      document.getElementById("form").submit();
    };
    render() {
        
      return (
        <div>
            <p id="comment">OranageLover: Why do you like bananas so much?</p>
            <p id="response">Because bananas are love, bananas are life!</p>
            <br />
          <form id="form" action="javascript:void('');" className="add_comment">
            <label>Name<input id="name" type="string" name="name" /></label>
            <br />
            <label>Email<input id="email" type="string" name="email" /></label>
            <br />
            <label>Comment<textarea id="comment" name="comment"></textarea></label>
            <input type="submit" value="Add Comment" onClick={this.submitForm} />
          </form>
        </div>
      );
    };
  };
  
  export default FAQ;