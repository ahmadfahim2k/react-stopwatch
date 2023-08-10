function Button({ btnText, handleClick}) {


    return (
      <>
        <button className='rounded-md bg-white bg-opacity-10 text-white cursor-pointer p-2 w-40 h-16 shadow-custom-red active:scale-95' onClick={handleClick} >{btnText}</button>
      </>
    )
}

export default Button;