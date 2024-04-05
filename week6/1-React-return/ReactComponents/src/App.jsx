// import React, { useState } from "react"

// function App() {

//   const [title, setTitle] = useState("my no. is 1");




//   function renderTitle(){
//     setTitle("my no. is "+ Math.random());
//   }
//   return (
//     // <div>
//     //   <Header title = "header 1" />
//     //   <Header title = "Header 2" />

//     // </div>

//     // we can use empty tags to remove 1 extra div
    
    
//     <>
//     <button onClick={renderTitle}> click here </button>

//     <Header id = "t1" title = {title} />
//     <Header id = "t2" title = "Header 2" />
//     <Header id = "t2" title = "Header 3" />
//     <Header id = "t2" title = "Header 4" />
//     <Header id = "t2" title = "Header 5" />
//     <Header id = "t2" title = "Header 6" />

//     </>


    
//     //  the above thing can also be achieved by React.Fragment

//   //   <React.Fragment>
//   //     <Header id ="t1" title = "header 1" />
//   //     <Header id ="t2" title = "Header 2" />
//   //     <Header id ="t3" title = "Header 3" />

//   // </React.Fragment>
       
//   )

// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App





// //  UP UNTIL NOW WHOLE APP WAS GETTING RENDER + ITS CHILDERN (HEADER COMPONENT) WAS ALSO GETTING RE-RENDERED (NOT GOOD , WE NEED TO MINIMIZE THE NO. OF RENDERS )


// // WE can do it by pushing th state vars down  ->



// import { useState } from "react"

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="My name is raman" />
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("my name is heroo");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return <>
//     <button onClick={changeTitle}>Click me to change the title</button>
//     <Header title={firstTitle} />
//   </>
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App




  //      ANOTHER WAY TO DO IT -> MEMOIZATION -> REACT.MEMO


import React, { useState } from "react"

function App() {

  const [firstTitle, setFirstTitle] = useState("my no. is 1");

  function updateTitle(){
    setFirstTitle("my no. is "+ Math.random())
  }


  return (
    <div>
      <button onClick={updateTitle} > click to change</button>
      <Header title={firstTitle} />
      <br />
      <Header title={"Header 11"}></Header>
      <Header title={"Header 21"}></Header>
      <Header title={"Header 1"}></Header>
      <Header title={"Header 41"}></Header>
      <Header title={"Header 51"}></Header>


    </div>
  )
}


// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

//  react memo only renders when there's a change in  the component ->
//  memo lets you skip re-rendering  a component when its props are unchanged

const Header = React.memo(
  function Header({title}){
    return <div>
      {title}
    </div>
  }
)


export default App




