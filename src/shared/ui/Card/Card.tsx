type CardProps = React.PropsWithChildren;

export function Card({ children }: CardProps) {
  return <div>{children}</div>;
}
