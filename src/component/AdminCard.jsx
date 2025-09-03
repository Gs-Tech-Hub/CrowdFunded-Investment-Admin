import { useState } from 'react'
import { Link } from 'react-router-dom'
import { adminTableHeader } from '../data/admin'
import { ConfirmationModal } from '../AllFiles'
import LinesEllipsis from 'react-lines-ellipsis'

const AdminCard = ({ adminTableBody, deleteCampaign, saveCampaign }) => {
    const [adminData, setadminData] = useState(adminTableBody)
    return (
        <div className='adminCard w-[95vw]  mx-[auto] overflow-x-auto'>
            <table className='m-[auto] max-[755px]:w-[50rem]  mx-[auto] max-[755px]:overflow-x-auto'>
                <thead>
                    {
                        adminTableHeader?.map(item => {
                            return <tr key={item.id}>
                                <th>{item.number}</th><th>{item.CampaignName}</th><th>{item.date}</th><th>{item.status}</th><th>{item.action}</th><th></th><th></th><th></th><th></th>
                            </tr>
                        })
                    }
                </thead>
                <tbody>
                    {
                        adminTableBody.map(item => {
                            return <tr key={item.id}>
                                <td>{item.number}</td>
                                {/* <td>{item.CampaignName}</td> */}
                                <td>
                                    <LinesEllipsis
                                        text={item.CampaignName}
                                        maxLine='1'
                                        ellipsis='..'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                                <td>
                                    <select name="" id="">
                                        <option value="">update status</option>
                                        <option value="pending">pending</option>
                                        <option value="active">active</option>
                                        <option value="rejected">rejected</option>
                                    </select>
                                </td>
                                <td className='cursor-pointer hover:text-[blue]'>re-edit</td>
                                <td className='cursor-pointer hover:text-[blue]'><button><Link to={`/Campaign/${item.id}`}>view</Link></button></td>
                                <td className='cursor-pointer hover:text-[blue]'><button onClick={saveCampaign}>save </button></td>
                                <td className='cursor-pointer hover:text-[red]'><ConfirmationModal deleteCampaign={deleteCampaign} /></td>
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default AdminCard