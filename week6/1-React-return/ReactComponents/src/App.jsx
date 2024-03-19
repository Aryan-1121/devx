import React from "react"

function App() {

  return (
    // <div>
    //   <Header title = "header 1" />
    //   <Header title = "Header 2" />

    // </div>

    // we can use empty tags to remove 1 extra div 
  //   <>
  //   <Header title = "header 1" />
  //   <Header title = "Header 2" />

  // </>
    
    //  the above thing can also be achieved by React.Fragment

    <React.Fragment>
    <Header title = "header 1" />
    <Header title = "Header 2" />
    <Header title = "Header 3" />

  </React.Fragment>
       
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
