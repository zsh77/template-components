import Backdrop from 'Components/Backdrop/Backdrop'
import Spinner from 'Components/Spinner/Spinner'
import React, { FC, useEffect } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './LoadingLayer.module.scss'
import { useAppDispatch, useAppSelector } from 'Hooks/hooks'
import { loadingSelector, showLoading } from 'Redux/CommonSlice'
import { useRouter } from 'next/router'

export interface ILoadingLayerProps {
  className?: string
}

const LoadingLayer: FC<ILoadingLayerProps> = (props) => {
  const { className } = props
  const isLoading = useAppSelector(loadingSelector)

  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   isLoading && router.isReady && dispatch(showLoading(false))
  // }, [router.asPath, router.isReady])

  return isLoading ? (
    <div className={classJoin([styles.loadingLayer, className])}>
      <Backdrop isOpen={true} onClick={() => {}} />
      <div className="bg-white px-10 py-6 z-30 rounded-lg">
        <Spinner radius={25} strokeWidth={6} />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default LoadingLayer
LoadingLayer.defaultProps = {}
