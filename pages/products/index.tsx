import Link from "next/link";

const ProductsList = () => {
    return (
        <div className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <main>
                <h2 className={`text-5xl`}>Products</h2>
                <ul  className={`gap-x-6 py-5 list-disc`}>
                    <li>
                        <Link href="/products/smartPhone">
                            SmartPhone
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/pc">
                            PC
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/headPhone">
                            HeadPhone
                        </Link>
                    </li>
                </ul>
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Link href="/">
                        Back to Top
                    </Link>
                </p>
            </main>
        </div>
    );
}

export default ProductsList;