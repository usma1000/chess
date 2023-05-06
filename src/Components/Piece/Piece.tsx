interface Props {
  type: Piece;
}

export default function Piece({ type }: Props) {
  const alt = `${type.color} ${type.type}`;
  const src = `/${type.type}-${type.color[0]}.svg`;

  return <img src={src} alt={alt} />;
}
