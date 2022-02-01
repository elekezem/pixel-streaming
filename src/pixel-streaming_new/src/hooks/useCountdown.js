import React from "react";
import PropTypes from 'prop-types';

// libs
import moment from "moment";


function useCountdown(props) {

  const refInterval = React.useRef(null)
  const [value, setValue] = React.useState(0)


  React.useEffect(() => {

    startCountdown()

    return () => {
      clearInterval(refInterval.current)
    };

  }, []);


  React.useEffect(() => {

    props.onProgress({percentage: value})

  }, [value]);

  const startCountdown = () => {

    if(!props.seconds) return ;


    clearInterval(refInterval.current)
    setValue(0)

    const startTime = moment()
    const targetTime = startTime.add(props.seconds, 'seconds')

    const relDiff = (a, b) => Math.round(((a - b) / a) * 100)

    clearInterval(refInterval.current)
    refInterval.current = setInterval(() => {

      const totalSeconds = props.seconds //moment.duration(targetTime.diff(startTime)).asSeconds();
      const leftSeconds = moment.duration(targetTime.diff(moment())).asSeconds();

      const percentage = relDiff(totalSeconds, leftSeconds)

      // console.error('='.repeat(30));
      // console.error('totalSeconds', totalSeconds);
      // console.error('leftSeconds', leftSeconds);
      // console.error('percentage', percentage);

      if(percentage >= 100) {
        clearInterval(refInterval.current)
        setValue(100)
        return ;
      }

      setValue(percentage)

    }, 100);

  }

  const cls = new class {
    constructor() {}

    stop() {
      clearInterval(refInterval.current)
      setValue(100)
    }
  }

  return cls
};

useCountdown.propTypes = {
	seconds: PropTypes.number.isRequired,
  onProgress: PropTypes.func.isRequired,
};

useCountdown.defaultProps = {
	seconds: undefined,
  onProgress: () => {},
};


export default useCountdown
