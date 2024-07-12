'use client'

// We add 'use client' at the top to indicate that this component should be rendered on the client side.
// This is necessary because the <Toaster /> component from the "react-hot-toast" library is intended to run in the client environment.
// Directly using <Toaster /> in layout.tsx would cause it to be treated as a server-side component, leading to issues.
// By creating a new component with 'use client', we ensure it runs correctly on the client side.

import { Toaster } from "react-hot-toast"

const ToasterProvider = () => {
  return (
    <Toaster/>
)
}

export default ToasterProvider