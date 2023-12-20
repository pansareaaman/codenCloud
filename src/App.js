import './App.css';
import Home from './component/Home'
import {Footer} from './component/Footer'
import { Route ,Routes } from 'react-router-dom';
import  MoreDetails   from './component/MoreDetails';
import CourseCard from './component/CourseCard'

import C from './assets/c.jpg';
import CPP from './assets/cpp.jpg';
import HTML from './assets/html.jpg';
import CSS from './assets/css.jpg';
import NODE from './assets/node.jpg';
import PHP from './assets/php.jpg';
import PYTHON from './assets/python.jpg';
import JS from './assets/js.jpg';
import JAVA from './assets/java.jpg';
import REACT from './assets/react.jpg';


function App() {


  const data=[
    {
      id: 101,
      title: 'React-Js',
      img: REACT,
      overview: 'Foundation for creating web pages. Defines the structure and content of a webpage.',
      long_description: 'Dive into the fundamentals of HTML, the backbone of web development. Explore how to structure content, create links, and utilize tags for various elements. In "codeN cloud," this course forms the foundation of every webpage.',
      price: '8000',
      instructor: 'Umar Solanki',
      duration: 5,
      description: 'Frontend',
      course: 'Professional',
      link: '/reactjs',
      poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
      ylink1: '',
      ylink2: ''
    },
    {
      id: 102,
      title: 'CSS',
      img: CSS,
      overview: 'Styles and designs the HTML structure. Responsible for the layout and presentation of web pages.',
      long_description: 'Delve into the art of web design with CSS. Understand how to style HTML elements, control layout, and create visually appealing websites. In "codeN cloud," master the skills to make your web pages not only functional but also aesthetically pleasing.',
      price: '3000',
      instructor: 'Umar Solanki',
      duration: 5,
      description: 'Frontend',
      course: 'Professional',
      link: '/css',
      poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
      ylink1: '',
      ylink2: ''
    },    
      {
        id: 103,
        title: 'JavaScript',
        img: JS,
        overview: 'Adds interactivity and dynamic behavior to web pages. Often used for client-side scripting in web development.',
        long_description: 'Unleash the power of JavaScript to bring your web pages to life. From manipulating the DOM to handling events, this course in "codeN cloud" covers the essentials of client-side scripting. Gain hands-on experience in building interactive and dynamic user interfaces.',
        price: '3000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Frontend',
        course: 'Professional',
        link: '/javascript',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 104,
        title: 'PHP',
        img: PHP,
        overview: 'Server-side scripting language. Used for web development to create dynamic web pages.',
        long_description: 'Enter the realm of server-side scripting with PHP. Understand how PHP enables dynamic content generation, interacts with databases, and facilitates seamless integration with web applications. Acquire the skills to develop robust and dynamic server-side components for your projects in codeN cloud.',
        price: '6000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Professional',
        link: '/php',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 105,
        title: 'Spring Boot',
        img: JS,
        overview: 'Simplifies the development of Java-based enterprise applications. Framework for building scalable and production-ready applications.',
        long_description: 'Embark on the journey of Java web development with Spring Boot. Discover how this framework streamlines the process of building enterprise-level applications. From RESTful APIs to microservices, gain the expertise to develop scalable and efficient Java-based solutions in codeN cloud.',
        price: '10000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Professional',
        link: '/spring-boot',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 106,
        title: 'HTML',
        img: HTML,
        overview: 'Foundation for creating web pages. Defines the structure and content of a webpage.',
        long_description: 'Dive into the fundamentals of HTML, the backbone of web development. Explore how to structure content, create links, and utilize tags for various elements. In "codeN cloud," this course forms the foundation of every webpage.',
        price: '4000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Frontend',
        course: 'Professional',
        link: '/html',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 107,
        title: 'Java',
        img: JAVA,
        overview: 'Versatile, object-oriented programming language. Widely used for building a variety of applications, including web and mobile.',
        long_description: 'Master the versatility of Java, a powerful object-oriented programming language. This course in "codeN cloud" covers everything from basic syntax to advanced topics such as multithreading, networking, and GUI development. Acquire the skills to build diverse applications, from desktop to enterprise-level systems.',
        price: '9000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Professional',
        link: '/java',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 108,
        title: 'C++',
        img: CPP,
        overview: 'General-purpose programming language. Known for its efficiency and used in various applications, including systems programming and game development.',
        long_description: 'Dive into C++, a high-performance programming language known for its efficiency and versatility. Explore object-oriented programming principles, memory management, and the creation of powerful applications. From system programming to game development, C++ in "codeN cloud" opens doors to a wide range of possibilities.',
        price: '6000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Professional',
        link: '/c++',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 109,
        title: 'C',
        img: C,
        overview: 'Procedural programming language. Used for system and application development.',
        long_description: 'Explore the foundational aspects of the C programming language. Understand the principles of procedural programming, memory management, and data structures. Gain the skills to develop efficient and reliable software, making C in "codeN cloud" an essential language for system and application development.',
        price: '7000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Professional',
        link: '/c',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 110,
        title: 'Nodejs',
        img: NODE,
        overview: 'JavaScript runtime for server-side development. Allows building scalable network applications.',
        long_description: 'Harness the capabilities of Node.js for server-side JavaScript development. Learn how to build scalable and high-performance network applications. From handling HTTP requests to asynchronous programming, this course in "codeN cloud" equips you with the skills to leverage JavaScript on the server side.',
        price: '8000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Professional',
        link: '/nodejs',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 111,
        title: 'Python',
        img: PYTHON,
        overview: 'General-purpose programming language known for its simplicity and readability.',
        long_description: 'Dive into the world of Python, a versatile and beginner-friendly programming language. Learn the fundamentals of Python syntax, data structures, and control flow. From basic scripting to web development and data analysis, Python is your gateway to a multitude of applications.',
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Professional',
        link: '/python',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      }
      
];




  return (
    <div className="App">
        {/* <Navbar/>         */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/course" element={<CourseCard data={data} />} />
          <Route path='/moredetails/:id' element={<MoreDetails data={data}/>}></Route>       
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
