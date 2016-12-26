var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title-main">About</h1>
      <p>
        This is a collection of example apps built with React.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
            JavaScript framework used.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
