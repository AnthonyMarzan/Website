class Shape extends React.Component {
	constructor() {
		super();
		this.state = {randSize: 100, randPerCent: "50%", bgColor:(colors[Math.floor(Math.random()*20)])};
		this.timerTick = this.timerTick.bind(this);
	};
	
	timerTick() {
		this.setState(function(prevState, props) {
				var colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552",
		"#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976", "#967c64",
		"#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];
			return {randSize: Math.floor(Math.random()*125), randPerCent:Math.floor(Math.random()*100)+1+'%', bgColor:(colors[Math.floor(Math.random()*20)])};
		});
	};
	
	componentDidMount() {
		setInterval(this.timerTick, 1000);
	};
	
	render() {
		var circleStyle = {
			padding: 10,
			margin: 20,
			display: "inline-block",
			backgroundColor: this.state.bgColor,
			borderRadius: this.state.randPerCent,
			width: this.state.randSize,
			height: this.state.randSize,
		};
		
		
		return (
			<div style={circleStyle}>
			</div>
		);
	}
};

var colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552",
"#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976", "#967c64",
"#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];


var renderData = [];

for (var i = 0; i < 60; i++) {
	var randPerCent = Math.floor(Math.random()*100)+1+'%';
	var randSize = Math.floor(Math.random()*125);
	renderData.push(<Shape perCent={randPerCent} size={randSize} bgColor={colors[Math.floor(Math.random()*20)]}/>);
}

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		{renderData}
	</div>,
	destination
);