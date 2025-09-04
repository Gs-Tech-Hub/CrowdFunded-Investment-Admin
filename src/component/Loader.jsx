import { HashLoader } from "react-spinners";

const styles = {
    margin: "9rem auto",
};
function Loader({ color }) {

    return (
        <div className="sweet-loading">
            <HashLoader
                color={color ? color : '#79ddf9'}
                cssOverride={styles}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1.3}
            />
        </div>
    );
}

export default Loader;