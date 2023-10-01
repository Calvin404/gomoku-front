import style from './LogStatus.module.css'

// Gives status, only needed error status.
type LogStatusProps = {
  variant: 'error'
  LogStatus: string
}

export default function LogStatus({ variant, LogStatus }: LogStatusProps) {
  return <div className={`${style.LogStatus} ${style[variant]}`}>{LogStatus}</div>
}