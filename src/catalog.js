'use strict';

var catalog = [
  {
    prompt: "When was JavaScript created?",
    answers: [
      {
        text: "1995",
        correct: true
      },
      {
        text: "1982",
        correct: false
      },
      {
        text: "1987",
        correct: false
      },
      {
        text: "2001",
        correct: false
        }]
      },

  {
  prompt: "What is the name of plain JavaScript?",
  answers: [
    {
      text: "Stracciatella JS",
      correct: false
    },
    {
      text: "Backbone",
      correct: false
    },
    {
      text: "jQuery",
      correct: false
    },
    {
      text: "VanillaJS",
      correct: true
      }]
    },

  {
    prompt: "What's the difference between JavaScript and Java?",
    answers: [
      {
        text: "Java and Javascript are similar like Car and Carpet are similar.",
        correct: true
      },
      {
        text: "Both are created for developing of standalone applications run in secure, sandboxed environments.",
        correct: false
      },
      {
        text: "Java is the short name for JavaScript.",
        correct: false
      },
      {
        text: "JavaScript has become popular in mobile devices,",
        correct: false
        }]
      },
          
    
  {
  prompt: "What you wanted was a banana, what you got was a gorilla holding the banana, and the entire jungle. Who said that and what the problem is about?",
  answers: [
    {
      text: "Mark Zuckerberg, about fake news.",
      correct: false
    },
    {
      text: "Brendan Eich, about the problem with functional-oriented languages.",
      correct: false
    },
    {
      text: "Joe Armstrong, about the problem with object-oriented languages.",
      correct: true
    },
    {
      text: "Bram Cohen, about Livescript",
      correct: false
     } ]
  },


  { 
  prompt: "What is functional programming?",
  answers: [
    {
      text: "Sub-class relationship: hierarchical class taxonomies.",
      correct: false
    },
    {
      text: "Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data.",
      correct: true
    },
    {
      text: "Functional programming is based on the concept of 'objects', which may contain data, in the form of fields.",
      correct: false
    },
    {
      text: "Functional programming expresses the logic of a computation without describing its control flow.",
      correct: false
     }]
    },
  
  {
  prompt: "What is the Prototypal Inheritance?",
  answers: [
    {
      text: "Instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`.",
      correct: true
    },
    {
      text: "Instances inherit from classes, and create sub-class relationships: hierarchical class taxonomies.",
      correct: false
    },
    {
      text: "Instances are typically instantiated via constructor functions with the `new` keyword.",
      correct: false
    },
    {
      text: "Prototype theory is a mode of graded categorization in computer science.",
      correct: false
     }]
    },

  {
  prompt: "Examples of functional languages",
  answers: [
    {
      text: "Java, C++, C#, Python, PHP",
      correct: false
    },
    {
      text: "Octave, R, Cilk Plus, Julia, Perl Data Language",
      correct: false
    },
    {
      text: "Lisp, ML, Haskell, Erlang, Clojure, Elm, F Sharp, OCaml",
      correct: true
    },
    {
      text: "Ruby, Perl, Object Pascal",
      correct: false
     }]
    },
   
  {
  prompt: "What is asynchronous programming?",
  answers: [
    {
      text: "Code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk I/O.",
      correct: true
    },
    {
      text: "A sequence of instructions that is continually repeated until a certain condition is reached",
      correct: false
    },
    {
      text: "One task must execute in some way that is dependent on the other, such as wait to start until the other task has completed.",
      correct: false
    },
    {
      text: "The engine runs in an event loop. When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result.",
      correct: true
     }]
    },

{
  prompt: "What would following code return? console.log(typeof typeof 1);",
  answers: [
    {
      text: "String",
      correct: true
    },
    {
      text: "Number",
      correct: false
    },
    {
      text: "Boolean",
      correct: false
    },
    {
      text: "NaN",
      correct: false
      }]
    },

{
  prompt: "Which one is not a JavaScript framework?",
  answers: [
    {
      text: "AngularJS",
      correct: false
    },
    {
      text: "Boost",
      correct: true
    },
    {
      text: "ReactJS",
      correct: false
    },
    {
      text: "Meteor.js",
      correct: false
      }]
    },
  
{
  prompt: "What would following code return?   console.log(0.1 + 0.2);",
  answers: [
    {
      text: "0.30000000000000004",
      correct: true
    },
    {
      text: "0.3",
      correct: false
    },
    {
      text: "NaN",
      correct: false
    },
    {
      text: "undefined",
      correct: false
      }]
    },

  {
  prompt: "What is Encapsulation?",
  answers: [
    {
      text: "A way of arranging complexity where the more complex details are suppressed below the current level (hidden).",
      correct: false
    },
    {
      text: "When invoking a method on an object, this becomes the object itself.",
      correct: false
    },
    {
      text: "To put all the data attributes of an object and its inner working (methods) inside of it.",
      correct: true
    },
    {
      text: "It is an object that contains the constructor of the instance, the methods and properties of the prototype",
      correct: false
      }]
    },
    

{
  prompt: "What is not a part of a MEAN, open-source JavaScript software stack?",
  answers: [
    {
      text: " MongoDB",
      correct: false
    },
    {
      text: "LAMP",
      correct: true
    },
    {
      text: "AngularJS",
      correct: false
    },
    {
      text: "Express.js",
      correct: false
      }]
    },
      
{
  prompt: "What is the ECMAScript?",
  answers: [
    {
      text: "This is a software application for retrieving, presenting and traversing information resources on the World Wide Web. ",
      correct: false
    },
    {
      text: "ECMAScript is an object-oriented programming language.",
      correct: false
    },
    {
      text: "ECMAScript is a suite of programs that facilitate developing and running programs written in the Java programming language.",
      correct: false
    },
    {
      text: "ECMAScript is scripting-language specification for JavaScript standardisation.",
      correct: true
      }]
    }



 
   
    ]