import axios from 'axios';
import FetchRequest from './FetchRequest';
import FetchSuccess from './FetchSuccess';
import FetchFailure from './FetchFailure';
function RequestApi() {
    return (dispatch) => {
        //API request
        axios.get('https://api.twitch.tv/kraken/streams/featured?&client_id=0qiqvtdeife676hv061uaaa7mxq9i8')
        .then(response => {
            const streams = response.data.featured.map(function(feat) {
            return feat.stream;
            });
            dispatch(FetchSuccess(streams))
        })
        .catch(e => {
            dispatch(FetchFailure(e))
        });
        dispatch(FetchRequest())
    }
}
export default RequestApi