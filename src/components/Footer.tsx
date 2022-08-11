import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.HP__footer}>
      <div className="flex w-full justify-center">
        <span className="text-[#7a7a7a]">
          &copy; {new Date().getFullYear()} Jegor Zyrjanow. All Rights Reserved.
        </span>
      </div>
    </div>
  )
}
