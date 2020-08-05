import React, {Component} from 'react'

class Diary extends Component {
    constructor(props){
        super(props)
        this.state = {
            updatingDate: false,
            dateInput: this.props.date,
            updatingDiary: false,
            DiaryInput: this.props.diary
        }
        
    }
    handledateInputChange = (e)=>{
        this.setState({
            dateInput: e.target.value
        })
    }
    handleDiaryInputChange = (e)=>{
        this.setState({
            DiaryInput: e.target.value
        })
    }
    handledateInputBlur = (e)=>{
        var id = this.props.id
        var data = {
            date:this.state.dateInput,
            diary:this.state.DiaryInput
        }
        this.props.updateDiary(id,data)
        this.setState({
            updatingDate:false,
            updatingDiary:false
        })
    }
   
    handleRemoveClick = (e)=>{
        var id = this.props.id
        this.props.removeDiary(id)
    }
    handledateDobleClick = (e)=>{
        this.setState({
            updatingDate:true,
            updatingDiary:true
        })
    }
    render(){
        return(
            <div className="mydiary">
                    <div className="diary-body">
                        <i className="far fa-times-circle diary-remove" onClick={this.handleRemoveClick}></i>
                        <div className="diary-date" onDoubleClick={this.handledateDobleClick}>
                        <input type="text" className="form-control" id="date-input" value={this.state.dateInput} onBlur={this.handledateInputBlur} onChange={this.handledateInputChange}/>
                        </div>
                        <div className="diary-content" onDoubleClick={this.handledateDobleClick}>
                        <textarea cols="40" rows="5" id="diary-input" value={this.state.DiaryInput} onChange={this.handleDiaryInputChange} onBlur={this.handledateInputBlur}></textarea>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Diary