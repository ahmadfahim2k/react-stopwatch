import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { activeAtom, timerAtom } from '../Recoil';
import { useEffect } from 'react';
import Watch from './Watch';
import Button from './Button';

function Home() {

    const [active, setActive] = useRecoilState(activeAtom);
    const setTimer = useSetRecoilState(timerAtom);
    const resetTimer = useResetRecoilState(timerAtom);

    useEffect(() => {
        let intervalId;
        if (active) {
            intervalId = setInterval(() => {
                setTimer((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [active]);

    const startTimer = () => {
        setActive(true);
    }

    const pauseTimer = () => {
        setActive(false);
    }

    return (
        <div className="flex flex-row">
            <div className="basis-3/4 mt-5">
                <Watch />
            </div>
            <div className="h-600 mx-5 flex flex-col justify-evenly items-center">
                <Button btnText={'START'} handleClick={startTimer} />
                <Button btnText={'PAUSE'} handleClick={pauseTimer} />
                <Button btnText={'RESET'} handleClick={resetTimer} />
            </div>
        </div>
    )
}

export default Home;