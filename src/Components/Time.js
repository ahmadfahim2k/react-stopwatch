function Time({ time }) {

  const formattedNumber = time.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <div className='m-auto text-aliceblue text-5xl tracking-widest h-32 w-64 flex justify-center items-center'>{formattedNumber}</div>
  )
}

export default Time;