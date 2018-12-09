import React from 'react';
import { getState } from 'redux';
import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';
import Loader from '../presentationals/Loader';
import Axios from 'axios';
import StreamCard from '../presentationals/StreamCard';
import Alert from '../presentationals/Alert';
import RequestApi from '../../actions/FetchApi';
//Provider/Container React Component
class Stream extends React.Component {

    componentWillMount() {
        this.props.store.subscribe(this.forceUpdate.bind(this));
        this.props.store.dispatch(RequestApi());
    }

    render() {
        const stateProps = this.props.store.getState();
        const status = stateProps.status;
        const streamCardItems = stateProps.streams.map((stream) =>
            <StreamCard
                key = { stream._id }
                streamCover = { stream.preview.medium }
                streamLink = { stream.channel.url }
            />
        );
        const error = stateProps.error;
        return (
                    <div>
                        {status === "loading" ? (
                            <Loader />
                        ) : (
                            status === "success" ? (
                                <div className="stream-cards">
                                {streamCardItems}
                                </div>
                            ) : (
                                status === "error" ? (
                                <div>
                                    <Alert error = { error } />
                                </div>
                                ) : (
                                <div></div>
                                )
                            )
                            )
                        }
                    </div>
        )
    }
}
export default Stream