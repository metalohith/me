import React , {Component} from 'react';
import { Line } from 'react-chartjs-2';
import './styles/Charts.css';


export default class Chart extends Component{
	constructor(){
		super();
		this.state={
			chartEn:false,
			coins:['BTC','ETH','XRP','BCH','LTC'],
			chartData:{
			    labels: [],
			    datasets: [{ 
			        data: [],
			        label: "BTC",
			        borderColor: "#3e95cd",
			        fill: false
			      }, { 
			        data: [],
			        label: "ETH",
			        borderColor: "#8e5ea2",
			        fill: false
			      }, { 
			        data: [],
			        label: "XRP",
			        borderColor: "#3cba9f",
			        fill: false
			      }, { 
			        data: [],
			        label: "BCH",
			        borderColor: "#e8c3b9",
			        fill: false
			      }, { 
			        data: [],
			        label: "LTC",
			        borderColor: "#c45850",
			        fill: false
			      }
			    ]
			},
			options:{
			      title: {
			        display: true,
			        text: 'CryptoCurrency'
			      }
			}
		};

		this.dataFetch=this.dataFetch.bind(this);
	}

	componentWillMount(){
		this.state.coins.forEach((c,i)=>{
			this.dataFetch(c,i);
		});
	}

	dataFetch(c,i){
		fetch('https://coincap.io/history/30day/'+c)
		.then(results=>{
			return results.json();
		}).then(data=>{
			let chartData=this.state.chartData;
			if(chartData.labels.length<=0){
				let time=[];
				data.price.forEach((p)=>{
					let t=new Date(p[0]).toString().split(' ').splice(1,2).join(' ');
					time.push(t);
				})
				chartData.labels=time;
			}
			let prices=[];
			data.price.forEach((p)=>{
				prices.push((p[1]));
			})
			chartData.datasets[i].data=prices;
			this.setState({chart:data,chartEn:true,chartData:chartData});
			console.log(this.state);
		})
	}

	render() {
		return (
			<div className='charts'>
			{this.state.chartEn?(<Line data={this.state.chartData} options={this.state.options} width={600} height={250}/>):(<div></div>)}
			</div>
		);
	}

}