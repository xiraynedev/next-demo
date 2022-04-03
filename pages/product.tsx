import {GetStaticProps, GetStaticPropsContext} from 'next';

interface PeopleProps {
  name: string;
}

export default function People() {

  return (
    <div>
      Ready
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async (context:GetStaticPropsContext) => {
//   const response = await fetch(`https://swapi.dev/api/people`);
//   const data = await response.json();
//
//   console.log(data)
//   return {
//     props: {
//       name: data.results[0].name
//     }
//   }
// }