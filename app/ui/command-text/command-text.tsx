import Link from 'next/link'
import styles from './command-text.module.scss'
import { inconsolata } from '@/app/ui/fonts/inconsolata'

export default function CommandText({
  path,
  command,
  id,
}: {
  path: string
  command: string
  id: string
}) {
  return (
    <div id={id} className={`${styles.command}`}>
      <Link href={`#${id}`}
        className={`${styles.command_inner} shim-carcass shim-effect animate an_slow`}
      >
        <div
          className={`${styles.profile_command_path} ${inconsolata.className}`}
        >
          {path}
        </div>
        <div className={`${styles.profile_command_command}`}>{command}</div>
      </Link>
    </div>
  )
}
