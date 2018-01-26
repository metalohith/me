import React,{Component} from 'react';
import timeLineData from './assets/timeLineData.js';
import TimeLineBlock from './TimeLineBlock';
import './styles/TimeLine.css';

class TimeLine extends Component{

		constructor(props){
			super(props);
		}

		componentWillMount(){
			// timeLineData.timeLine=timeLineData.timeLine.reverse();
		}

		render(){

			var blocks=timeLineData.timeLine.map((t,i)=>{
					return <TimeLineBlock timeData={t}></TimeLineBlock>;
			});

			return(
				<div className='timeLineOuterCont'>
					<div className='timeLineCont'>
						{blocks}
					</div>
				</div>
			);
		}

}

export default TimeLine;