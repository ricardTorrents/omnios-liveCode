import { Button } from 'antd'
import { connect } from 'react-redux'
import { setAppTest } from "../actions/appActions"
import EbookList from '../components/EbooksList'


const Page2=(props)=>{
    return (
         <div>
           
             <EbookList/>
    </div>)
}
const mapStateToProps = (state) => ({
    test:state.app.test
  });
export default connect(mapStateToProps,{setAppTest})(Page2)