import { Layout } from "../components/Layout";

export const PackagePage = (props: {name: string}) => {
  return (
    <Layout title={props.name}>
    </Layout>
  );
};
