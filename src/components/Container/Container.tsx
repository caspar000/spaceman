import cn from 'classnames'

interface IContainer {
  children?: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: IContainer) => {
  const classcn = cn('mx-auto px-4 max-w-[960px] w-full', className)
  return <div className={classcn}>{children}</div>
}
