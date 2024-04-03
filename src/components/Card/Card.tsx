import cn from 'classnames'

interface ICard {
  children?: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: ICard) => {
  const classcn = cn('p-6 rounded-[16px] bg-[#FAFAFA]', className)
  return <div className={classcn}>{children}</div>
}
