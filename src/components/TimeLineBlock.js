import React,{Component} from 'react';
import './styles/TimeLineBlock.css';

class TimeLineBlock extends Component{

	constructor(props){
		super(props);
	}

	render(){

		var tech=[];
		if(this.props.timeData.tech){
			tech = this.props.timeData.tech.map((t,i)=>{
				return <span className='greyHighLight'>{t}</span>;
			});
		}

		return(
			<div className='timeBlkCont'>
				<div className='timeBlkLeft'>
					<div className='timeBlkDate'>
						{this.props.timeData.date}
					</div>
				</div>
				<div className='timeBlkCircleCont'>
					<div className='timeBlkCircle'>
					</div>
					<div className='timeBlkCircleInner'>
					</div>
				</div>
				<div className='timeBlkTextCont'>
					<div className='timeBlkText'>
						{this.props.timeData.text}
					</div>
					<div className='timeBlkDesc'>
						{this.props.timeData.desc}
					</div>
					<div className='timeBlkTech'>
						{tech}
					</div>
				</div>
			</div>
		);
	}
}

export default TimeLineBlock;