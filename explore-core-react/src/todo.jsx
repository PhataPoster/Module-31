export default function Todo({task,status,done}) {
    
//    if(done){ return(
//         <div className="card">
//             <p>task : {task} </p>
//             <p>status : {status}</p>
//             <p>done : {done.toString()}</p>
//         </div>
//     )
// }

// else{
//     return(
//         <div className="card">
//             <p>task : {task} </p>
//             <p>status : {status}</p>
//             <p>done : {done.toString()}</p>
//         </div>
//     )   
// }

// return done ? <li>status : {status}</li> : <li>status : {status}    </li>

// return done && <li>Status: {status}</li> 
return done || <li>Status: {status}</li>   

}