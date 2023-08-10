import { minutesSelector, secondsSelector, timerAtom } from '../Recoil';
import { useRecoilValue } from 'recoil';
import Time from './Time';
import Clock from './Clock';

function Watch() {

  const time = useRecoilValue(timerAtom);
  const minutes = useRecoilValue(minutesSelector);
  const seconds = useRecoilValue(secondsSelector);

  return (
    <div className='my-5 mx-auto h-600 w-600 rounded-full flex justify-evenly items-center text-white shadow-custom-red'>
      <div className='flex flex-col justify-center items-center'>
        <Clock time={minutes} />
        <Time time={minutes} />
      </div>
      <span className='text-5xl mt-48 text-white'>:</span>
      <div className='flex flex-col justify-center items-center'>
        <Clock time={time} />
        <Time time={seconds} />
      </div>
    </div>
  )


}

export default Watch;