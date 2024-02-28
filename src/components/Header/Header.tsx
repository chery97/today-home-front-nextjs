import Head from "next/head";
import {log} from "util";

export default function Header({ data }) {
    const topCategory = data.filter((value) => value.cateCd.length < 4);
    console.log(topCategory)

    return (
        <div>
            {topCategory.map((value) => (
                <div key={value.id}>
                    {value.cateNm}
                </div>
            ))}
        </div>
    );
}