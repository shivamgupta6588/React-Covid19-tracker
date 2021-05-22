import React ,{useState, useEffect}from 'react';
import axios from 'axios';
import './DataFetch.css';

function DataFetch2() {

    const [posts, setPosts] = useState([])
    useEffect(()=>
    axios.get('https://api.covid19india.org/data.json')
    .then(res=>{
        
      
       console.log(res.data.statewise)
       setPosts(res.data.statewise)
    })
    .catch(err=>{console.log(err)}),[])


    return (
        <>
         <h1 class="heading"><p><img src="https://uxwing.com/wp-content/themes/uxwing/download/22-events-culture/live.png" alt="" width="50"/>  COVID-19 TRACKER <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="" width="50"/></p></h1>
        <table class="table table-hover  table-bordered">
                <thead >
                            <tr >
                                    <th >State</th>
                                    <th>Active</th>
                                    <th>Confirmed</th>
                                    <th>Deaths</th>
                                    <th>Recovered</th>
                                    <th>Last Updated</th>
                            </tr>
                </thead>
                    <tbody>
                    {
                            posts.map(post => (
                                post.confirmed > 0 &&
                                <tr key={post.statecode} >
                                <td>{post.state}</td>
                                <td>{post.active}</td>
                                <td>{post.confirmed}</td>
                                <td>{post.deaths}</td>
                                <td>{post.recovered}</td>
                                <td>{post.lastupdatedtime}</td>
                                
                                </tr>
                                ))
                            }   
                    </tbody>
</table>
            
        </>
    )
}

export default DataFetch2
