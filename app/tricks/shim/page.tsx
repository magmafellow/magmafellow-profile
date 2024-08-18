import styles from './page.module.scss'

export default function Shim() {
  return (
    <div className='h-screen flex-col gap-10 flex justify-center items-center'>
      <div className={`${styles['shim-carcass']} ${styles['shim-effect']} ${styles['animate']} text-slate-400 flex justify-center items-center border w-[150px] h-[38px] border-slate-500 rounded-xl`}>text for shim</div>
      <div className={`${styles['shim-carcass']} ${styles['shim-hover']} ${styles['animate']} w-[300px] h-[100px] text-xl text-slate-400 flex justify-center items-center border border-slate-600 rounded-2xl`}>hover for shim</div>
    </div>
  )
}