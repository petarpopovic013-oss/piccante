import ClientPage from './ClientPage';



export default async function Page(props) {
  const params = await props.params;
  return <ClientPage params={params} />;
}

export function generateStaticParams() {
  return [{ lang: 'sr' }, { lang: 'en' }, { lang: 'ru' }];
}
