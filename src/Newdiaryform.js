import React, {Component} from 'react'

class Newdiaryform extends Component {
    constructor(props){
        super(props)
        this.state = {
            diaryinput:'',
            dateinput:''
        }
    }
    handleDiaryInputChange = (e)=>{
        this.setState({
            diaryinput: e.target.value
        })
        // console.log(e.target)

    }
    handleDateInputChange = (e)=>{
        this.setState({
            dateinput: e.target.value
        })
        // console.log(e.target)
    }
    handleAddbuttonClick = (e)=>{
        e.preventDefault()
        var data = {
            diary: this.state.diaryinput,
            date: this.state.dateinput
        }
        this.props.addDiary(data)
        // console.log(e.target)

    }
    render(){
        return(
            <div className="mydiary new-diary">
                    <form className="diary-body">
                        
                        <div className="form-group">
                            <input type="text" className="form-control" id="date-input" placeholder="todays date"  onChange={this.handleDateInputChange}/>
                        </div>
                        <div className="form-group">
                            <textarea cols="40" rows="5" id="diary-input" placeholder="Today I was..." onChange={this.handleDiaryInputChange}></textarea>
                            
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleAddbuttonClick}>Add Diary</button>
                    </form>
               </div>
        )
    }
}

export default Newdiaryform;