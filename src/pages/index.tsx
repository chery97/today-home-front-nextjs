import Header from "@/components/Header/Header";
import axios from "axios";
import Head from "next/head";

export async function getServerSideProps(context: any) {
    // const res = await fetch('http://localhost:3001/category', {
    //     method: "GET",
    // });
    const res = await axios.get('http://localhost:3001/category');
    if (res.status !== 200) {
        throw new Error('데이터를 가져오는데 실패하였습니다.');
    }
    // const data = await res.json();
    const data = await res.data;
    // console.log(data)

    return {
        props: {
            data,
        },
    };
}

export default function Home({ data }) {
  return (
      <div>
          <Header data={ data }/>
          <div>
              {data.map((value) => (
                  <div key={value.cateCd}>
                      {value.cateNm}
                  </div>
              ))}
          </div>
      </div>
  );
}
