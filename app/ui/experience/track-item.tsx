import styles from './exp-track.module.scss'

export default function TrackItem({
  icons,
  names,
  year,
  children,
}: {
  icons: any[]
  names: string[]
  year: string
  children: any
}) {
  return (
    <div className={`${styles.track_item}`}>
      <div className={`${styles.track_item_time}`}>{year}</div>
      <div className={`${styles.track_item_tech}`}>
        <div className={`${styles.track_item_tech_icons}`}>
          {icons.map((icon, i) => <div key={i}>{icon}</div>)}
        </div>
        <div className={`${styles.track_item_tech_names}`}>
          {names.map((name, i) => <div key={i}>{name}</div>)}
        </div>
      </div>
      <div className={`${styles.track_item_content}`}>
        {children}
      </div>
    </div>
  )
}
