
import { TEST} from '../actions/appActions';




const initialValues=()=>{
	return {
		test:"ADFADF"
	}
}


const AppReducer = (state=initialValues(), action) => {
    console.log("AQUI",action)
	switch (action.type) {
	  	case TEST:
            return {...state,...action.actionData}
            default: return state;
	}
}

export default AppReducer;