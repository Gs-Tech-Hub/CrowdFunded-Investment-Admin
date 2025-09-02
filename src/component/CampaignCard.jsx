import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom'

const CampaignCard = ({ allcampaigns }) => {
    return (
        <div>
            <div className='flex items-center justify-center flex-wrap max-[390px]:block '>
                {
                    allcampaigns.map(item => {
                        return <div key={item.id} className='w-[22rem] mx-[1.5%] my-[2.5rem] border-[1px] m-[auto] rounded-[1rem] border-[lightgray] p-[0.8rem] max-[1417px]:mx-[2rem] max-[1073px]:mx-[1.5%] max-[1073px]:my-[1rem] max-[1073px]:w-[45%] max-[1073px]:p-[0.5rem] max-[390px]:w-[85%] max-[390px]:mx-[auto] max-[390px]:mb-[2rem] max-[390px]:p-[0.8rem]'>
                            <div className='w-[100%] m-[auto] h-[15rem] max-[684px]:h-[13rem] max-[589px]:h-[11rem] max-[436px]:h-[9rem] max-[390px]:h-[11rem]'><img className='rounded-[1rem] h-[100%] w-[100%]' src={item.img} alt="" /></div>
                            <div className='px-[0.6rem] w-[100%] max-[509px]:px-[0rem]'>
                                <h3 className='font-bold text-[1.1rem] w-[100%]'>
                                    {/* {item.title} */}
                                    <LinesEllipsis
                                        text={item.title}
                                        maxLine='1'
                                        ellipsis='...'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </h3>
                                <LinesEllipsis
                                    text={item.description}
                                    maxLine='1'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />
                                <div className='flex items-center'>
                                    <p className='font-bold'>Status: </p>
                                    <p className='ml-[0.3rem]'>Active</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <ShareContentModal isButton={false} />
                                    <p className='text-end cursor-pointer text-[blue]'><Link to={`/DashBoard/Campaign/${item.id}`}>View</Link></p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CampaignCard