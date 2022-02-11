import Head from "next/head";

type Props = {
    title: string;
};

export default function Seo({ title }: Props) {
  return (
    <>
      <Head>
        <title>{title} | Humans of 42</title>
      </Head>
    </>
  );
}
