<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#techincal-choices">Technical Choices</a></li>
      </ul>
      <ul>
        <li><a href="#strech-features">Stretch Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
  </ol>
</details>



## About The Project

This product is a command-line interface for an RPN Calculator. Reverse Polish Calculators are different from standard calculators, in which operators follow their operands. For example, "3 2 +" equates to "5" in an RPN calculator.

This product enables arithmetic calculations with two operands and four basic operations (addition, subtraction, multiplication, and division).



### Technical Choices

The backbone of the product in terms of data structure is the "stack", where its LIFO (Last In Frist Out) concept perfectly aligns with the RPN logic.

In terms of data validation, "Regex" (Regular expression) is used to simply validate the user input against the currently available operators.

The Node.js "stream" interface (more specifically "readline" module) is used to enable future scalability of the product. The current "readable" and "writable" streams can conveniently be changed to work with the local file system through the "fs" native module. Moreover, the "duplex" stream can be used to enable the "TCP socket" interface.




### Stretch Features

There are a few items that can be added to further improve the product:

* Add additional unit tests to increase the test code coverage as well as to include the asynchronous callbacks.
* Implement integration tests to ensure the full functionality of the child processes in the command line.
* The current product only accepts two-operand calculations. Expand the code to include uni-operand calculations.



## Getting Started

To start the application, simply run "node index.js" command from the directory. To run the tests, run "npm run test".  



