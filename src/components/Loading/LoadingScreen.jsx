import { MoonLoader } from "react-spinners";

const LoadingScreen = ({ loading }) => {
  return <div>
    <MoonLoader
        color='#fca903'
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>Loading...</p>
  </div>
}

export default LoadingScreen;
