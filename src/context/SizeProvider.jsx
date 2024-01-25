import React, { useEffect, useState } from 'react'
import SizeContext from './sizeContext';

// screenSize state is passed across diffrent components
export default function SizeProvider({children}) {
    const [screenWidth, setScreenWidth] =useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setScreenWidth(window.innerWidth);
        })

        //clean up
        return ()=>{
            Window.removeEventListener("resize",()=>{
                setScreenWidth(window.innerWidth)
            });
        }
    }, [])
  return <SizeContext value={screenWidth}>
    {children}
  </SizeContext>
}
