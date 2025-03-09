type NewsDetailPageParamsType = {
  id: string;
};

export default function NewsDetailPage({
  params,
}: {
  params: NewsDetailPageParamsType;
}) {
  return <div>{params.id}</div>;
}
