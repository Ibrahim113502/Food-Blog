import axios from 'axios';
import { Table } from 'flowbite-react';
import { useEffect,useState } from 'react';
function AdminTable() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>

            <p className=' text-center'>Food Details</p>
            <Table>
                {/* <Table.Head>
                    <Table.HeadCell>Product name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Image</Table.HeadCell>
                </Table.Head> */}
                <Table.Body className="divide-y">
                    {items.map((obj) => {
                        return (<div>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {obj.title}
                                </Table.Cell>
                                <Table.Cell>{obj.category}</Table.Cell>
                                <Table.Cell>{obj.price}</Table.Cell>
                                <Table.Cell><img className='h-[40px]' src={obj.image} alt="" /></Table.Cell>
                            </Table.Row>
                        </div>)
                    })}
                </Table.Body>
            </Table>
        </>
    )
}
export default AdminTable