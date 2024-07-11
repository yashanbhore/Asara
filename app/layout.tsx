
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';
// import Navbar from './components/navbar/Navbar';
// import ClientOnly from './components/ClientOnly';
// import Modals from './components/modals/Modal';
// import RegisterModal from './components/modals/RegisterMoadl';
// import ToasterProvider from './providers/ToasterProvider';
// import LoginModal from './components/modals/LoginMoadl';
// import getCurrentUser from './actions/getCurrentUsers';
// import RentModal from './components/modals/RentModal';

const inter = Inter({ subsets: ['latin'] })


const font = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Asara',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          </ClientOnly> */}
          <Modal actionLabel='Submit' title='Hello World' isOpen/>
          <Navbar/>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
