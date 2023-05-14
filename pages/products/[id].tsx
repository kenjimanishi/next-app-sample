import { useRouter } from "next/router";
import Link from "next/link";

// export type ProductType = {
//     id: string,
//     name: string,
//     image: string,
// }

// // For SSG
// export async function getStaticProps({params}) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: {
//             product: data,
//         },
//     };
// }

// export async function getStaticPaths() {
//     const req = await fetch(`http://localhost:3000/products.json`);
//     const data = await req.json();

//     const paths = data.map(product => {
//         return {
//             params: {
//                 id: product,
//             },
//         };
//     });

//     return {
//         paths,
//         fallback: false,
//     };
// }

// For SSR
export async function getServerSideProps({params}) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: {
            product: data,
        },
    };
}

const Product = ({product}) => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <div>
                <main>
                    <h1>Page of {id}</h1>
                    <img src={product.image} width="300" height="400" />
                    <p>{product.name}</p>
                    <br />
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        <Link href="/products">
                            Back to Products
                        </Link>
                    </p>
                </main>
            </div>
        </div>
    );
}

export default Product;