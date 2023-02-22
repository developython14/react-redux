import './App.css';
import { Counter } from './componanat/counter';
import Test_devices from './componanat/Test_Camera';
import { ReactMediaRecorder } from "react-media-recorder";

const RecordView = () => (
  <div>
    <ReactMediaRecorder
      video
      screen
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
    />
  </div>
);
function App() {
  return (
    <div className="App">
      <RecordView/>
    </div>
  );
}

export default App;
