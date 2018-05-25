import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import icon from '../assets/images/wemo_login.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants';

class Hoho extends React.Component {
	render(){
		console.log('Hoho '+JSON.stringify(this.props))
		return(
			<View style={styles.container}>
				<Text>HOHO</Text>
				<Image
			        source={icon}
			        style={{height:500, width:300}}
			      />
			</View>
		)
	}
}

const styles={
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  paddingTop: SCREEN_HEIGHT*0.2,
	  height: SCREEN_HEIGHT*0.8,
	  width: SCREEN_WIDTH,
	  backgroundColor: '#ecf0f1'
	}
}

// const mapDispatchToProps = {
//   loginUser
// };

export default Hoho;