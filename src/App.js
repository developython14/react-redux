import './App.css';
import { Counter } from './componanat/counter';
import Test_devices from './componanat/Test_Camera';
import { useReactMediaRecorder  } from "react-media-recorder";
const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true  });

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Test_devices/>
    </div>
  );
}



export default App;
