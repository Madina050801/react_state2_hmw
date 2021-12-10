import React from "react";
import {data} from './data';
import './index.css';

class Toshkent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      status: '',
      data: {
        status: 'OK',
        dataList: data,
      }
    }
  }
  render(){
    console.log(this.state.data.dataList);
    const onDelete = (id) => {
      let res = this.state.data.dataList.filter((value)=> value.id !== id)
      this.setState({
        data: {
          ...this.state.data,
          dataList:res,
        },
      });
    };

    const onChange=(e) => {
      console.log(e);
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
    const onSave=()=> {
      const newData = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: {
          ...this.state.data,
          dataList: [...this.state.data.dataList, newData],
        }
      })
    }
    return(
      <div className='container'>
        <div>
          <input placeholder='name' name='name' onChange={onChange} type="text" />
          <input placeholder='status' name='status' onChange={onChange} type="text" /> 
          <button onClick={onSave}>save</button>
        </div>
        
        <div className='table'>
        <table className='table'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>edit</th>
            </tr>
        {this.state.data.dataList.map((value)=> (
          
            <tr>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>
                <button onClick={() => onDelete(value.id)}>delete</button>
              </td>
            </tr>
          
          // <h1>
          //   {value.id} {value.name}
          // </h1>
        ))
        }
        </table>
        </div>
      </div>
    )
    }
    // return(
    //   <div>
    //     <h1>Hi State {this.state.count}</h1>
    //     <h1>Name: {this.state.name}</h1>
    //     <h1>Surname: {this.state.surname}</h1>

    //     <button name='count' onClick={(e) =>increment(e)}>+</button>
    //     <button name='count' onClick={decrement}>-</button>
    //     <br />

    //     <input placeholder='name' name='name' onChange={onChange} type="text" />
    //     <input placeholder='surname' name='surname' onChange={onChange} type="text" />
    //     { !this.state.data.dataList.length ? (
    //       <h1>no data</h1>
    //     ) : (
    //       this.state.data.dataList.map((value)=>(
    //         <div key={value.id}>
    //           <h1>
    //           {value.id} {value.name} <button onClick={()=> onDelete(value.id) }>delete</button>
    //           </h1>
    //         </div>
    //       )))
      //   }
      // </div>
      // );  
    // }
}


export default Toshkent;