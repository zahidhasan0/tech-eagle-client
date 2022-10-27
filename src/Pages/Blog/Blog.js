import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 mx-auto my-5'>
           <div  className='shadow mb-4 mt-2 p-3 ' style={{background: '#f4f4ea'}}>
            <h2>what is cors?</h2>
            <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </p>
           </div>
           <div  className='shadow mb-4 mt-2 p-3 ' style={{background: '#f4f4ea'}}>
            <h2>Why are you using `firebase`? What other options do you have to implement authentication?</h2>
            <p>
            Firebase is Google's Backend-as-a-Service (BAAS) solution for mobile app development.Google Analytics for Firebase allows us to track our users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.Firebase was originally developed to be a realtime database, and today that is still one of its key features. The Realtime Database is essentially a cloud-hosted NoSQL database that stores data as JSON (JavaScript Object Notation) in real time.
            </p>
           </div>
           <div  className='shadow mb-4 mt-2 p-3 ' style={{background: '#f4f4ea'}}>
            <h2>How does the private route work?</h2>
            <p>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated. Private routes in v5 and below were done in a specific way using a custom component mostly named PrivateRoute that was most of the times just a wrapper and composition of basic Route and Redirect e.g.
            </p>
           </div>
           <div  className='shadow mb-4 mt-2 p-3 ' style={{background: '#f4f4ea'}}>
            <h2>What is Node? How does Node work?</h2>
            <p>
            Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
            </p>
           </div>
           
        </div>
    );
};

export default Blog;