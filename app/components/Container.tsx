'use client'   // every component in Next is by default server component so inorder to 

interface ContainerProps{
    children:React.ReactNode;
}

const Container : React.FC<ContainerProps> = (
  {children}
) => {
  return (
    <div
    className="
      max-w-[2500]
      mx-auto
      xl:px-20
      md:px-10
      sm:px-2
      px-4
    "
>
      {children}
      </div>
  )
}

export default Container
