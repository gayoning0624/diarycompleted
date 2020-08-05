import React, {Component} from 'react';
import Newdiaryform from './Newdiaryform';
import Diary from './Diary';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      mydiary:[{
        id:1,
        diary:'Today I went to movies with my friends',
        date:'Wednesday,20 April'
      },{
        id:2,
        diary:'Me and John had chicken for dinner',
        date:'Thursday,21 April'
      },{
        id:3,
        diary:'assignment due this friday',
        date:'Saturday,08 June'
      }]
    }
  }
  addDiary = (data)=>{

    var newDiary = {
      id:Date.now(),
      ...data
    }
    var newList = [newDiary, ...this.state.mydiary]
    this.setState({
      mydiary: newList
    })
    // console.log(newList)
  }
  removeDiary = (id)=>{
    var mydiary = this.state.mydiary
    var filtered = mydiary.filter((item)=>{
      return item.id != id
    })
    this.setState({
      mydiary:filtered
    })
  }
  updateDiary = (id,data)=>{
    var mydiary = this.state.mydiary
    var updated = mydiary.map((item)=>{
      return (item.id == id) ? {...item,...data} : item
    })
    this.setState({
      mydiary:updated
    })
  }

  render(){
    return(
      <div className="wrap">
        <h1>My Little Diary</h1>
        <div className="container">
            <div className="diary">
            <Newdiaryform addDiary={this.addDiary}/>
              {
                this.state.mydiary.map((item)=>{
                  var diaryProps = {
                    key: item.id,
                    removeDiary: this.removeDiary,
                    updateDiary: this.updateDiary,
                    ...item
                  }
                  return(
                  <Diary {...diaryProps}/>
                  )
                  
                })
              }
               
                
                
                
            </div>

            
        </div>
        
    </div>
    
    )
  }
}
export default App;
