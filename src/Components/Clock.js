import { useRecoilValue } from 'recoil';
import { numsAtom } from '../Recoil';
import './Clock.css';

function Clock({ time }) {
  const nums = useRecoilValue(numsAtom);
  const sRotation = 6 * time;

  return (
    <div className='relative'>
      <div className='my-0 mx-auto w-52 h-52 rounded-full bg-white bg-opacity-10 border-2 border-solid border-white border-opacity-25 flex justify-center items-center before:absolute before:w-2 before:h-2 before:rounded-full before:bg-white'>
        <div className='absolute flex justify-center items-end animation' style={{ '--sRotation': `${sRotation}deg` }}>
          <i className='absolute -bottom-5 bg-white w-0.5 h-28 rounded-lg'>
          </i>
        </div>
        {nums.map(num => {
          return (
            <span className={`m-auto absolute w-fit inset-3 text-center transform span`} style={{ '--i': num}}>
              <b className='inline-block text-base text-white b'>{num * 5}
              </b>
            </span>
          )
        })
        }
      </div>
    </div>
  );
}

export default Clock;