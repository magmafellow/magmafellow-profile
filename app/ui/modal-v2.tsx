'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

import './modal-v2.css'
import { isElemInParent } from '@/app/lib/utils'

export default function ModalV2({
  children,
  id,
}: {
  children: any
  id: string
}) {
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    const modalWrapper = document.querySelector(`div#${id}`)
    modalWrapper?.addEventListener('click', function (e) {
      console.log(e.target)
      const target = e.target as HTMLButtonElement
      const modalCloser = document.querySelector(`div#${id} .v2_modal-closer`)
      if (
        target.classList.contains('v2_modal-wrapper') ||
        isElemInParent(target, modalCloser)
      ) {
        modalWrapper.classList.remove('active')
        setTimeout(() => modalWrapper.classList.remove('pre-active'), 0)
      }
    })
  }, [])

  const onClickXHandler = () => {
    const modalWrapper = document.querySelector(`div#${id}`)
    modalWrapper?.classList.remove('active')
  }

  return (
    <div
      id={id}
      className={clsx(
        'v2_modal-wrapper z-[999] w-screen justify-center items-center fixed top-0 left-0 h-screen bg-opacity-30 bg-black'
        // {
        //   'hidden': !isOpened,
        //   'block': isOpened,
        // }
      )}
    >
      {/* template */}
      {/* <div className="modal relative h-[370px] px-4 pt-4 pb-2 w-[300px] rounded-md border border-gray-600">
          <h2 className="font-bold text-2xl mb-3">Title</h2>
          <p>Info paragraph 01</p>
          <p>Info paragraph 02</p>

          <FaXmark
            className="modal-closer absolute top-4 right-4 text-2xl text-white hover:text-sky-300 cursor-pointer"
          />
        </div> */}

      {children}
    </div>
  )
}

export function ModalV2Activator({
  id,
  className,
  text,
}: {
  id: string
  className: string
  text: string
}) {
  const onClickHandler = () => {
    const modalWrapper = document.querySelector(`div#${id}`)
    modalWrapper?.classList.add('pre-active')

    setTimeout(() => modalWrapper?.classList.add('active'), 0)
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClickHandler}
    >{text}</button>
  )
}
