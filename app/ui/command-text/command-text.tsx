import styles from './command-text.module.scss'
import { inconsolata } from '@/app/ui/fonts/inconsolata'

export default function CommandText({ path, command }: { path: string, command: string }) {
  return (
    <div className={`${styles.command}`}>
      <div
        className={`${styles.profile_command_path} ${inconsolata.className}`}
      >
        {path}
      </div>
      <div className={`${styles.profile_command_command}`}>{ command }</div>
    </div>
  )
}
