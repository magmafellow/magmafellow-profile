import styles from './page.module.scss'

export default function Shim() {
  return (
    <div className='h-screen flex-col gap-10 flex justify-center items-center'>
      <div className={`${styles.shim} ${styles.an_fast} text-slate-400 flex justify-center items-center border w-[150px] h-[38px] border-slate-500 rounded-xl`}>text for shim</div>
      <div className={`${styles.shim} w-[300px] h-[100px] text-xl text-slate-400 flex justify-center items-center border border-slate-600 rounded-2xl`}>text for shim</div>
    </div>
  )
}