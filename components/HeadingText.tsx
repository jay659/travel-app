const HeadingText = ({title,size}:HeadingText) => {
  return (
    <>
        <h1 className={`text-${size}xl font-semibold text-gray-700`}>
            { title }
        </h1>
    </>
  )
}

export default HeadingText